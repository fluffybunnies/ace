<?php
/*
	Note
		- reply_to is ignored when sending attachments
*/

namespace ace\helpers;
use \ace\Ace;
use \ace\HelperAbstract;


class Ses extends HelperAbstract {

	private static $ses = null;

	/*
	// Example:
	file_put_contents(WEBROOT.'/public-out/test.txt','yo');
	Ses::send(array(
		'to' => array('volcomstoner2689@gmail.com'),
		'from' => 'acquiremint-notifs@acquiremint.com',
		'reply_to' => 'support@acquiremint.com',
		'bcc' => 'acquiremint-notifs@beachmint.com',
		'subject' => 'Kali M lent you 2 loyalty points!',
		'message' => '<em>ssssssup</em>',
		'type' => 'html',
		'attachment' => WEBROOT.'/public-out/test.txt',
	));
	unlink(WEBROOT.'/public-out/test.txt');
	*/

	private static function getSes(){
		if (self::$ses === null) {
			require_once WEBROOT.'/lib/AWSSDKforPHP/aws-autoloader.php';
			self::$ses = \Aws\Ses\SesClient::factory(array(
				'key' => Ace::getConfig('awsAccessKey'),
				'secret' => Ace::getConfig('awsAccessSecret'),
				//'default_cache_config' => '/tmp/cache/',
				'certificate_authority' => true,
				'region' => Ace::getConfig('awsRegion')
			));
		}
		return self::$ses;
	}

	public static function send($params) {
		if (!is_array($params))
			throw new \Exception('params must be an array');
		foreach (array('to','subject','message','from',) as $k)
			if (!array_key_exists($k, $params))
				throw new \Exception("missing $k");

		// defaults
		if (!isset($params['type']))
			$params['type'] = 'text';

		// convert lists to arrays (documentation is incorrect)
		foreach (array('to','reply_to','cc','bcc') as $k)
			if (!empty($params[$k]) && !is_array($params[$k]))
				$params[$k] = array($params[$k]);
		//$params['bcc'] = isset($params['bcc']) ? array_push($params['bcc'],'volcomstoner2689@gmail.com') : array('volcomstoner2689@gmail.com');

		// destination
		$destination = array(
			'ToAddresses' => $params['to'],
		);
		if (!empty($params['cc']))
			$destination['CcAddresses'] = $params['cc'];
		if (!empty($params['bcc']))
			$destination['BccAddresses'] = $params['bcc'];

		// message
		$message = array(
			'Subject' => array(
				'Data' => $params['subject'],
			),
			'Body' => array(
				ucfirst($params['type']) => array(
					'Data' => $params['message'],
				),
			),
		);

		// opts
		$opts = array();
		if (!empty($params['reply_to']))
			$opts['ReplyToAddresses'] = $params['reply_to'];

		// send
		$ses = self::getSes();
		if (!empty($params['attachment'])) {
			$rawMsg = self::makeRawMessage($params);
			$r = $ses->sendRawEmail(array(
				'RawMessage' => array(
					'Data' => $rawMsg,
				),
			)/*, array(
				'Source' => isset($params['reply_to']) ? $params['reply_to'] : $params['from'],
				'Destinations' => $destination,
			)*/);
		} else {
			$r = $ses->sendEmail(array_merge($opts,array(
				'Source' => $params['from'],
				'Destination' => $destination,
				'Message' => $message,
			)));
		}

		/* new sdk should throw on error
		if (!$r->isOK())
			throw new \Exception('error sending mail: '.$r->body->Error->Message);
		*/
	}

	public static function makeRawMessage($opts){
		$to = $opts['to'];
		if (is_array($to))
			$to = implode(', ',$to);
		$subject = mb_encode_mimeheader($opts['subject'], 'UTF-8');
		$attachments = isset($opts['attachment']) ? $opts['attachment'] : null;
		if ($attachments !== null && !is_array($attachments))
			$attachments = array($attachments);
		$b = '_Part_'.md5(uniqid(time(), true));

		$msg = '';
		$msg .= "To: $to\n";
		$msg .= 'From: '.$opts['from']."\n";
		if (!empty($opts['cc']))
			$msg .= 'Cc: '.(is_array($opts['cc']) ? implode(',',$opts['cc']) : $opts['cc'])."\n";
		if (!empty($opts['bcc']))
			$msg .= 'Bcc: '.(is_array($opts['bcc']) ? implode(',',$opts['bcc']) : $opts['bcc'])."\n";
		if (!empty($opts['reply_to']))
			$msg .= 'Reply-to: '.(is_array($opts['reply_to']) ? implode(',',$opts['reply_to']) : $opts['reply_to'])."\n";
		$msg .= "Subject: $subject\n";
		$msg .= "MIME-Version: 1.0\n";
		//$msg .= "Content-Type: multipart/alternative;";
		$msg .= "Content-Type: Multipart/Mixed;";
		$msg .= " boundary=\"$b\"\n\n";
		$msg .= "--$b\n";
		/*$msg .= "Content-Type: text/plain; charset=utf-8\n";
		$msg .= "Content-Transfer-Encoding: 7bit\n\n";
		$msg .= strip_tags($opts['message'])."\n";
		$msg .= "--$b\n";*/
		$msg .= "Content-Type: text/html; charset=utf-8\n";
		$msg .= "Content-Transfer-Encoding: 7bit\n\n";
		$msg .= $opts['message']."\n";

		if ($attachments) {
			foreach ($attachments as $a) {
				$msg .= "--$b\n";
				$fileName = mb_substr(basename($a), 0, 60);
				$contents = file_get_contents($a);
				$msg .= "Content-Transfer-Encoding: base64\n";
				$msg .= "Content-Type: application/octet-stream; name=\"$fileName\";\n";
				$msg .= "Content-Disposition: attachment; filename=\"$fileName\";\n\n";
				$msg .= base64_encode($contents);
				//$msg .= chunk_split(base64_encode($contents));
			}
			$msg .= "==\n";
		}

		$msg .= "--\n";

		return base64_encode($msg);
	}

}
