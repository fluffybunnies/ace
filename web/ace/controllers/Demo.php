<?php
/*

*/

namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;
use \ace\helpers\Ses;

class Demo extends ControllerAbstract {

	private static $defaultEmailTo = array('volcomstoner2689@gmail.com');
	private static $defaultEmailFrom = 'acquiremint-notifs@beachmint.com';

	private static $callCap = 10; // seconds
	private static $callLogMaxLength = 50;


	public function smile(){
		$webroot = WEBROOT;
		return str_replace("\n", '', `/usr/local/bin/node $webroot/../bin/demo-smile.js`);
	}

	public function emailCsvWithNode(){
		// http://ace.fabfitfun.com/ace/api/demo/email-csv-node?email_to=volcomstoner2689@gmail.com&email_from=acquiremint@beachmint.com&debug=1
		$params = $this->getInput(array(
			'email_to' => false,
			'email_from' => false,
			'subject' => false,
		));
		$emailTo = $params['email_to'] ? $params['email_to'] : self::$defaultEmailTo;
		$emailFrom = $params['email_from'] ? $params['email_from'] : self::$defaultEmailFrom;
		$subject = $params['subject'] ? $params['subject'] : 'Sup (node)';

		$this->preventTooMany($params);

		$emailTo = escapeshellarg($emailTo);
		$emailFrom = escapeshellarg($emailFrom);
		$subject = escapeshellarg($subject);
		$subjectParam = $subject ? "--subject=$subject" : '';

		$webroot = WEBROOT;
		$cmd = "/usr/local/bin/node $webroot/../bin/demo-emailCsv.js --emailTo=$emailTo --emailFrom=$emailFrom $subjectParam";
		//if (!empty($_GET['debug'])) echo "$cmd\n<br />";
		return `$cmd`;
		//return `$cmd  > /dev/null &`;
	}

	public function emailCsvWithPhp(){
		// http://ace.fabfitfun.com/ace/api/demo/email-csv-php?email_to=volcomstoner2689@gmail.com&email_from=acquiremint@beachmint.com
		$params = $this->getInput(array(
			'email_to' => false,
			'email_from' => false,
			'subject' => false,
		));
		$emailTo = $params['email_to'] ? $params['email_to'] : self::$defaultEmailTo;
		$emailFrom = $params['email_from'] ? $params['email_from'] : self::$defaultEmailFrom;
		$subject = $params['subject'] ? $params['subject'] : 'Sup (php)';

		$this->preventTooMany($params);

		$fileName = WEBROOT.'/public-out/demo-csvwithphp.'.time().'.csv';
		$data = $this->getSampleData();
		$this->generateCsvFromArray($fileName, $data);
		if (!is_file($fileName))
			throw new \Exception('output file not found');

		Ses::send(array(
			'to' => $emailTo,
			'from' => $emailFrom,
			'bcc' => 'volcomstoner2689@gmail.com',
			'subject' => $subject,
			'message' => '<em>Here you go!</em>',
			'attachment' => $fileName,
		));

		unlink($fileName);

		return array(
			'outputFileName' => basename($fileName),
			'emailTo' => $emailTo,
			'emailFrom' => $emailFrom,
		);
	}


	private function getSampleData(){
		return include WEBROOT.'/../sample-data.php';
	}

	private function generateCsvFromArray($writeToPath, $data){
		if (!isset($data[0]))
			throw new Exception('Invalid input');
		if (!($f=fopen($writeToPath, 'w+')))
			throw new Exception('Error opening file');
		
		$headers = array();
		foreach ($data[0] as $k => $v)
			$headers[] = $k;
		fputcsv($f, $headers);

		foreach ($data as $fields)
			fputcsv($f, $fields);

		if (!empty($f))
			fclose($f);
	}


	private function preventTooMany($data=array()){
		$fn = WEBROOT.'/public-out/demo-log.txt';
		if (!is_file($fn))
			touch($fn);
		$log = file_get_contents($fn);
		try {
			$log = json_decode(file_get_contents($fn), true);
			if (!is_array($log))
				throw new \Exception('unexpected format');
		} catch (\Exception $e) {
			//if (!empty($_GET['debug'])) echo "$e";
			$log = array();
		}
		$call = array(
			't' => microtime(true),
			'ip' => Ace::clientIp(),
			's' => 1,
		);
		$lastCall = end($log);
		if ($call['t'] < $lastCall['t']+self::$callCap)
			$call['s'] = 0;
		$log[] = $call;
		//if (!empty($_GET['debug'])) Ace::varDump($log);
		if (($numLogs = count($log)) > self::$callLogMaxLength)
			$log = array_splice($log, $numLogs-self::$callLogMaxLength);
		//if (!empty($_GET['debug'])) Ace::varDump($log);
		file_put_contents($fn, json_encode($log));
		if ($call['s'] == 0)
			throw new \Exception('too many requests');
	}

}
