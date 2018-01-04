<?php
namespace ace\controllers;

use \ace\Ace;
use \ace\core\ApiControllerAbstract;
//use \ace\controllers\Exception as ApiControllerException;

class Test extends ApiControllerAbstract {

	public function test(){
		return array(
			"isVisible" => false,
			"isOrderable" => true,
			"isBusyUntil" => null,
			"nextOpenTime" => array(
				"date" => "2018-01-04",
				"time" => "11:00AM"
			)
		);
	}

}
