<?php
/*
	To Do:
		- load routes from separate file
*/
namespace ace;
use \ace\Ace;
use \ace\core\Exception as ApiCoreException;

class Api {

	private function __clone(){}
	private function __construct(){}
	private static $routes = array(
		'GET|twitter/token/app' => 'Twitter::getAppToken',
		'GET|twitter/get' => 'Twitter::get',
		'GET|demo/smile' => 'Demo::smile',
		'GET|demo/email-text' => 'Demo::emailText',
		'GET|demo/email-html' => 'Demo::emailHtml',
		'GET|demo/email-csv-node' => 'Demo::emailCsvWithNode',
		'GET|demo/email-csv-php' => 'Demo::emailCsvWithPhp',
		'GET|app/version' => 'App::getAppVersion',
	);
	
	public static function request($route, $requestMethod='GET'){
		try {
			$requestMethod = strtoupper($requestMethod);
			$routeKey = $requestMethod.'|'.$route;
			if (!isset(self::$routes[$routeKey]))
				throw new ApiCoreException(1002); // Route not found

			$route = explode('::',self::$routes[$routeKey]);
			$class = '\\ace\\controllers\\'.$route[0];
			$method = $route[1];

			$controller = new $class;
			if (!is_callable(array($controller, $method)))
				throw new ApiCoreException(1003); // Controller method not found

			// $controller->preMethodCall();
			$res = $controller->$method();
			// $controller->postMethodCall();

		} catch (\Exception $e) {
			header((isset($_SERVER['SERVER_PROTOCOL'])?$_SERVER['SERVER_PROTOCOL']:'HTTP/1.1').' 500 Internal Server Error');
			$res = array(
				'error' => $e->getMessage(),
				'code' => $e->getCode(),
			);
		}

		$res = json_encode($res);
		header('Cache-Control: no-cache, must-revalidate');
		header('Expires: Mon, 19 Jul 1997 00:00:00 GMT');
		if (isset($_GET['callback'])) {
			header('Content-Type: application/javascript');
			// sanitize callback; csrf/xss...
			$res = preg_replace('/[^0-9a-zA-Z]/','',$_GET['callback']).'('.$res.');';
			//$res = $_GET['callback'].'('.$res.');';
		} else {
			// header to prevent XSS attacks
			// dont set for POSTs as it will break iframe posting
			//if ($requestMethod == 'GET')
				header('Content-Type: application/json');
		}

		exit($res);
	}

}
