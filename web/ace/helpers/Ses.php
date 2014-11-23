<?php
/*
	Note
		- Currently cc, bcc and reply_to are ignored when sending attachments
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
			/*require_once WEBROOT.'/lib/AWSSDKforPHP/sdk.class.php';
			self::$ses = new \AmazonSES;
			*/
			//require_once WEBROOT.'/lib/aws-sdk-php/src/Aws/Ses/SesClient.php';
			require_once WEBROOT.'/lib/AWSSDKforPHP2/aws-autoloader.php';
			self::$ses = \Aws\Ses\SesClient::factory(array(
				'key' => Ace::getConfig('sesKey'),
				'secret' => Ace::getConfig('sesSecret'),
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
			'Subject.Data' => $params['subject'],
			'Body.'.ucfirst($params['type']).'.Data' => $params['message'],
		);

		// opts
		$opts = array();
		if (!empty($params['reply_to']))
			$opts['ReplyToAddresses'] = $params['reply_to'];

		// send
		$ses = self::getSes();
		if (!empty($params['attachment'])) {
			//if (!empty($_GET['debug'])) {Ace::varDump($params['from']);Ace::varDump($params['to']);}
			$rawMsg = self::makeRawMessage($params);
			$r = $ses->sendRawEmail(array(
				'RawMessage' => array(
					'Data' => $rawMsg,
				),
			)/*, array(
				'Source' => $params['from'],
				'Destinations' => $params['to'],
			)*/);
		} else {
			$r = $ses->send_email($params['from'], $destination, $message, $opts);
		}

		if (!$r->isOK())
			throw new \Exception('error sending mail: '.$r->body->Error->Message);
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

/*
To: volcomstoner2689@gmail.com
From: acquiremint-notifs@beachmint.com
*/
/*$msg = <<<HTML
To: volcomstoner2689@gmail.com
From: acquiremint-notifs@beachmint.com
Subject: Amazon SES Test
MIME-Version: 1.0
Content-type: Multipart/Mixed; boundary="NextPart"
 
--NextPart
Content-Type: text/plain;
 
This is the message body.
 
--NextPart
Content-Type: text/plain;
Content-Disposition: attachment;
filename="test.txt"
 
This is the text in the attachment.
 
--NextPart--
HTML;*/
$msg = <<<HTML
To: volcomstoner2689@gmail.com
From: acquiremint-notifs@beachmint.com
Subject: Amazon SES Test
MIME-Version: 1.0
Content-type: Multipart/Mixed; boundary="NextPart"

--NextPart
 
This is the message body.
 
--NextPart
Content-Disposition: attachment;
filename="test.txt"
 
This is the text in the attachment.
 
--NextPart--
HTML;

/*
$msg = <<<HTML
To: volcomstoner2689@gmail.com
From: acquiremint-notifs@beachmint.com
Subject: Amazon SES Test
MIME-Version: 1.0
Content-type: Multipart/Mixed; boundary="NextPart"
 
--NextPart
Content-Type: text/plain;
 
This is the message body.

--NextPart--
HTML;
*/

		/*
		$msg .= "To: $to\n";
		$msg .= 'From: '.$opts['from']."\n";
		$msg .= "Subject: $subject\n";
		$msg .= "MIME-Version: 1.0\n";
		$msg .= "Content-Type: multipart/alternative;";
		//$msg .= "Content-Type: Multipart/Mixed;";
		$msg .= " boundary=\"$b\"\n\n";
		$msg .= "--$b\n";
		$msg .= "Content-Type: text/plain; charset=utf-8\n";
		$msg .= "Content-Transfer-Encoding: 7bit\n\n";
		$msg .= strip_tags($opts['message']) . "\n";
		$msg .= "--$b\n";
		$msg .= "Content-Type: text/html; charset=utf-8\n";
		$msg .= "Content-Transfer-Encoding: 7bit\n\n";
		$msg .= $opts['message']."\n";

		if ($attachments) {
			foreach ($attachments as $a) {
				$fileName = mb_substr(basename($a), 0, 60);
				$contents = file_get_contents($a);
				$msg .= "Content-Transfer-Encoding: base64\n";
				$msg .= "Content-Type: application/octet-stream; name=\"$fileName\";\n";
				$msg .= "Content-Disposition: attachment; filename=\"$fileName\";\n\n";
				$msg .= base64_encode($contents);
				//$msg .= chunk_split(base64_encode($contents));
				$msg .= "--$b";
			}
			$msg .= "==\n";
		}

		$msg .= "--\n";
		*/

		if (!empty($_GET['debug'])) {echo `git rev-parse HEAD`;echo $msg . "\n";}
		return base64_encode($msg);
	}

}
