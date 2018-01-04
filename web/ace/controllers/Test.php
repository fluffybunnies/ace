<?php
namespace ace\controllers;

use \ace\Ace;
use \ace\core\ApiControllerAbstract;
//use \ace\controllers\Exception as ApiControllerException;

class Test extends ApiControllerAbstract {

	public function test(){
		header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Origin: https://restaurants.uber.com');
		return array(
			"isVisible" => false,
			"isOrderable" => false,
			"isBusyUntil" => null,
			"nextOpenTime" => null,
			/*"nextOpenTime" => array(
				"date" => "2018-01-04",
				"time" => "11:00AM"
			)*/
		);
	}

}
