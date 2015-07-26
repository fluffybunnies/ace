<?php
namespace ace\controllers;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	protected static $missingCodeMessage = 'UNSET CONTROLLER CODE!';

	static protected $codes = array(
		2001 => 'Controller method not found',
		2002 => 'Missing Input',
		2003 => 'Invalid Input',
		2004 => 'Not Authorized',
		2005 => 'Not Implemented',

		2006 => 'Too many requests',

		2007 => 'Error from lib',
		2008 => 'Unexpected response from external api',
		2009 => 'Error response from external api',

		2010 => 'Output file not found',
		2011 => 'Unable to open file for writing',

		2020 => 'Unexpected parsed JSON format',

	);

	public function __construct($code, \Exception $previousError=null, $debugMessage=''){
		$msg = array( self::getCodeMessage($code) );
		if ($previousError)
			$msg[] = $previousError->getMessage();
		if ($debugMessage)
			$msg[] = $debugMessage;
		$msg = implode('; ',$msg);
		parent::__construct($msg, $code, $previousError);
		//$this->log();
	}

	public static function getCodeMessage($code){
		return isset(self::$codes[$code]) ? self::$codes[$code] : 'UNSET CONTROLLER CODE!';
	}

}