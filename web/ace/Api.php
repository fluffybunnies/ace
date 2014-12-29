<?php

namespace ace;
use \ace\Ace;

class Api {

	private function __clone(){}
	private function __construct(){}
	private static $routes = array(
		'twitter/token/app' => 'Twitter::getAppToken',
		'twitter/get' => 'Twitter::get',
		'demo/smile' => 'Demo::smile',
		'demo/email-csv-node' => 'Demo::emailCsvWithNode',
		'demo/email-csv-php' => 'Demo::emailCsvWithPhp',
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
    $r = json_encode($r);
		header('Cache-Control: no-cache, must-revalidate');
		header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
		if (isset($_GET['callback'])) {
			$r = $_GET['callback'].'('.$r.');';
			header('Content-Type: text/javascript');
		} else {
			// header to prevent XSS attacks
			// dont set for POSTs as it will break iframe posting
			if (Ace::g($_SERVER,'REQUEST_METHOD') == 'GET')
				header('Content-Type: application/json');
		}
    exit($r);
  }

}
