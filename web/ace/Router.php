<?php

namespace ace;
use \ace\Ace;

class Router {

	private static $routes = array(
		'/' => 'home.php',
		'/hc' => 'hc.php',
		'/id' => 'id.php',
		'/demo' => 'demo.php',
		'/ace.js' => 'ace/scripts/compile-ace.php',
		'/ace.css' => 'ace/scripts/compile-ace.php',
	);
	private static $apiPath = '/ace/api';

	public static function route($request){

		if (strpos($request, self::$apiPath) === 0) {
			Api::request( substr($request, strlen(self::$apiPath)+1) );
			exit;
		}

		Ace::varDump($request);
		$r = Ace::g(self::$routes, $request);
		Ace::varDump($r);
		if ($r !== null)
			self::go($r);

	}

	private static function go($where){
		include WEBROOT.'/'.$where;
		exit;
	}

}
