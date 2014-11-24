<?php

namespace ace;
use \ace\Ace;

class Router {

	private static $routes = array(
		'/' => 'home.php',
		'/hc' => 'hc.php',
		'/id' => 'id.php',
		'/demo' => 'demo.php',
	);
	private static $apiPath = '/ace/api';

	public static function route($request){

		if (strpos(REQUEST_PATH, self::$apiPath) === 0) {
			Api::request( substr(REQUEST_PATH, strlen(self::$apiPath)) );
			exit;
		}

		$r = Ace::g(self::$routes, $request);
		if ($r !== null)
			self::go($r);

	}

	private static function go($where){
		include WEBROOT.'/'.$where;
		exit;
	}

}
