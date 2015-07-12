<?php
namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;

class App extends ControllerAbstract {

	public function getAppVersion(){
		// @todo: cache this
		$commitHash = str_replace("\n",'',`git rev-parse HEAD`);
		return $commitHash;
	}

}
