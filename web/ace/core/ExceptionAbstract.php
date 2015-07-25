<?php
namespace ace\core;

class ExceptionAbstract extends \Exception {

	protected static $missingCodeMessage = 'UNSET CODE!';
	protected static $codes = array();

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
		return isset(self::$codes[$code]) ? self::$codes[$code] : self::$missingCodeMessage;
	}

	public function log(){

	}

}
