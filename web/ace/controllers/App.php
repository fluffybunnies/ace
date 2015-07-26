<?php
namespace ace\controllers;

use \ace\Ace;
use \ace\core\ApiControllerAbstract;
//use \ace\controllers\Exception as ApiControllerException;

class App extends ApiControllerAbstract {

	public function getAppVersion(){
		// @todo: cache this
		$gitHash = str_replace("\n",'',`git rev-parse HEAD`);
		return array('git_hash'=>$gitHash);
	}

}
