<?php
/*

*/

namespace ace\helpers;
use \ace\Ace;
use \ace\HelperAbstract;

require_once(WEBROOT.'/lib/AWSSDKforPHP/sdk.class.php');

class Ses extends HelperAbstract {

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
		$ases = new \AmazonSES;
		if (!empty($_GET['debug'])) {var_dump($params['from']); var_dump($destination); var_dump($message); var_dump($opts);}
		if (!empty($params['attachment'])) {
			$mailmime = new \Mailmime(array('eol' => "\n"));
			$mailmime->setTxtBody($message);
			$mailmime->setHTMLBody($message);
			$mailmime->addAttachment($params['attachment'], 'text/csv');
			$body = $mailmime->get();
			$headers = $mailmime->txtHeaders(array('From' => $params['from'], 'Subject' => $parms['subject']));
			$message = $headers . "\r\n" . $body;
			$r = $ses->sendrawemail(array(
					'Data' => base64_encode($message)
				), array('Destinations' => $destination)
			);
		} else {
			$r = $ases->send_email($params['from'], $destination, $message, $opts);
		}

		if (!$r->isOK())
			throw new \Exception('error sending mail: '.$r->body->Error->Message);
	}

}
