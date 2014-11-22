<?php
/*

*/

namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;

class Demo extends ControllerAbstract {

	private $defaultEmailTo = array('volcomstoner2689@gmail.com');
	private $defaultEmailFrom = 'acquiremint-notifs@gmail.com';


	public function emailCsvWithNode(){

	}

	public function emailCsvWithPhp(){
		$params = $this->getInput(array(
			'email_to' => false,
		));
		if (!$params['email_to'])
			$params['email_to'] = $this->defaultEmailTo;

		$fileName = '/var/www/ace/out/demo-csvwithphp.'.time().'.csv';
		$data = $this->getSampleData();
		$this->generateCsvFromArray($fileName, $data);
		if (!is_file($res))
			throw new \Exception('output file not found');

		return array(
			'outputFileName' => basename($fileName),
			'emailedTo' => $params['email_to'],
		);
	}


	private function getSampleData(){
		return include WEBROOT.'/../sample-data.php';
	}

	private function generateCsvFromArray($writeToPath, $data){
		if (!isset($data[0]))
			throw new Exception('Invalid input');
		if (!touch($writeToPath))
			throw new Exception('Error making file');
		if (!($f = fopen($writeToPath, 'w')))
			throw new Exception('Error opening file for writing');
		
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
