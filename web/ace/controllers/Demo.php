<?php
/*

*/

namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;

class Demo extends ControllerAbstract {

	private $defaultTo = array('volcomstoner2689@gmail.com');
	private $defaultFrom = 'acquiremint-notifs@gmail.com';


	public function emailCsvWithNode(){

	}

	public function emailCsvWithPhp(){
		return 'wef';
		return $this->getSampleData();
	}


	private function getSampleData(){
		return include WEBROOT.'/../sample-data.php';
	}



}
