<?php
namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;

class App extends ControllerAbstract {

	public function getAppVersion(){
		// @todo: cache this
		$gitHash = str_replace("\n",'',`git rev-parse HEAD`);
		return array('git_hash'=>$gitHash);
	}

}
