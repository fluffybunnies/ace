<?php
namespace ace;

use \ace\Ace;
use \ace\Api;

class Router {

	private static $routes = array(
		'' => 'home.php',
		'/hc' => 'hc.php',
		'/id' => 'id.php',
		'/demo' => 'demo.php',
		'/test' => 'test.php',
		'/ace.js' => 'ace/scripts/compile-ace.php',
		'/ace.css' => 'ace/scripts/compile-ace.php',

		//'/democ' => 'democ/index.php', // moved to https://github.com/fluffybunnies/alec/tree/master/jmstuff
	);
	private static $redirects = array(
	);
	private static $apiPath = '/ace/api';

	public static function route($request, $requestMethod='GET'){

		if (strpos($request, self::$apiPath) === 0) {
			Api::request( substr($request, strlen(self::$apiPath)+1), $requestMethod );
			exit;
		}

		if (isset(self::$routes[$request])) {
			self::go(self::$routes[$request]);
		}

		if (isset(self::$redirects[$request])) {
			self::redirect(self::$redirects[$request]);
		}

	}

	private static function go($where){
		include WEBROOT.'/'.$where;
		exit;
	}

	private static function redirect($where){
		header('HTTP/1.1 301 Moved Permanently');
		header("Location: $where");
		exit;
	}

}
