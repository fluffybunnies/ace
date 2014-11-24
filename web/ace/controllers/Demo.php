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


	public function smile(){
		$webroot = WEBROOT;
		return str_replace("\n", '', `/usr/local/bin/node $webroot/../bin/demo-smile.js`);
	}

	public function emailCsvWithNode(){
		// http://ace.fabfitfun.com/ace/api/demo/email-csv-node?email_to=volcomstoner2689@gmail.com&email_from=acquiremint@beachmint.com&debug=1
		$params = $this->getInput(array(
			'email_to' => false,
			'email_from' => false,
		));
		$emailTo = Ace::g($params, 'email_to', self::$defaultEmailTo);
		$emailFrom = Ace::g($params, 'email_from', self::$defaultEmailFrom);
		$subject = Ace::g($params, 'subject', 'Sup (node)');

		$emailTo = escapeshellarg($emailTo);
		$emailFrom = escapeshellarg($emailFrom);
		$subject = escapeshellarg($subject);
		$subjectParam = $subject ? "--subject=$subject" : '';

		$webroot = WEBROOT;
		$cmd = "/usr/local/bin/node $webroot/../bin/demo-emailCsv.js --emailTo=$emailTo --emailFrom=$emailFrom $subjectParam";
		if (!empty($_GET['debug'])) echo "$cmd\n<br />";
		return `$cmd &`;
	}

	public function emailCsvWithPhp(){
		// http://ace.fabfitfun.com/ace/api/demo/email-csv-php?email_to=volcomstoner2689@gmail.com&email_from=acquiremint@beachmint.com
		$params = $this->getInput(array(
			'email_to' => false,
			'email_from' => false,
		));
		$emailTo = Ace::g($params, 'email_to', self::$defaultEmailTo);
		$emailFrom = Ace::g($params, 'email_from', self::$defaultEmailFrom);
		$subject = Ace::g($params, 'subject', 'Sup (php)');

		$fileName = WEBROOT.'/public-out/demo-csvwithphp.'.time().'.csv';
		$data = $this->getSampleData();
		$this->generateCsvFromArray($fileName, $data);
		if (!is_file($fileName))
			throw new \Exception('output file not found');

		Ses::send(array(
			'to' => $emailTo,
			'from' => $emailFrom,
			'subject' => $subject,
			'message' => 'Here you go!',
			'attachment' => $fileName,
		));

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

}
