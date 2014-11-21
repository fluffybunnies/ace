<?php

namespace ace;
use \ace\Ace;

class Api {

	private function __clone(){}
	private function __construct(){}
	private static $routes = array(
		'twitter/token/app' => 'Twitter::getAppToken',
		'twitter/get' => 'Twitter::get',
	);
	
	public static function request($route){
		try {
			self::setData(false,self::_request($route));
		} catch (\Exception $e) {
			self::setData($e->getMessage());
		}
	}

	private static function _request($route){
		$route = Ace::g(self::$routes,$route);
		if (!$route)
			throw new \Exception('route not found');

		$route = explode('::',$route);
		$class = '\\ace\\controllers\\'.$route[0];
		$method = $route[1];

		$controller = new $class;
		if (!method_exists($controller,$route[1]))
			throw new \Exception('invalid method');

		return $controller->$method();
	}

	private static function setData($error,$data=null){
		$r = $error ? array('error'=>$error) : array('data'=>$data);
		exit(json_encode($r));
	}

}
