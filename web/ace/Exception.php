<?php
namespace ace;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	static private $codes = array(
		1002 => 'Route not found',
		1003 => 'Controller method not found',
	);

	public static function getCodeMessage($code){
		return isset(self::$codes[$code]) ? self::$codes[$code] : 'UNSET CORE CODE!';
	}

}