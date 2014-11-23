<?php
/*

*/

namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;
use \ace\helpers\Ses;

class Demo extends ControllerAbstract {

	private $defaultEmailTo = array('volcomstoner2689@gmail.com');
	private $defaultEmailFrom = 'acquiremint-notifs@beachmint.com';


	public function emailCsvWithNode(){
		$webroot = WEBROOT;
		return `/usr/local/bin/node $webroot/../bin/demo-emailCsv.js`;
	}

	public function emailCsvWithPhp(){
		$params = $this->getInput(array(
			'email_to' => false,
			'email_from' => false,
		));
		$emailTo = isset($params['email_to']) ? $params['email_to'] : $this->defaultEmailTo;
		$emailFrom = isset($params['email_from']) ? $params['email_from'] : $this->defaultEmailFrom;

		$fileName = WEBROOT.'/public-out/demo-csvwithphp.'.time().'.csv';
		$data = $this->getSampleData();
		$this->generateCsvFromArray($fileName, $data);
		if (!is_file($fileName))
			throw new \Exception('output file not found');

		Ses::send(array(
			'to' => $emailTo,
			'from' => $emailFrom,
			'subject' => 'Sup',
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
