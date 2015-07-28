<?php
namespace ace\helpers;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	static private $codes = array(
		6002 => 'Missing Input',
		6003 => 'Invalid Input',

		6007 => 'Error from lib',
		6008 => 'Unexpected response from external api',
		6009 => 'Error response from external api',

		6010 => 'Corrupted log file',
		6015 => 'Failed to write to log file',
		6017 => 'Too many requests',
	);

	public static function getCodeMessage($code){
		return isset(self::$codes[$code]) ? self::$codes[$code] : 'UNSET HELPER CODE!';
	}

}