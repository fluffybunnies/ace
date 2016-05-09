<?php
namespace ace\core;

class ExceptionAbstract extends \Exception {

	public static $unsetCodeMessage = 'Unset code';
	public static $codes = array();

	public function __construct($code, \Exception $previousError=null, $debugMessage=''){
		$msg = array( static::getCodeMessage($code) );
		if ($previousError) {
			$msg[] = $previousError->getMessage();
		}
		if ($debugMessage) {
			$msg[] = is_string($debugMessage) ? $debugMessage : json_encode($debugMessage);
		}
		$msg = implode('; ',$msg);
		parent::__construct($msg, $code, $previousError);
		//$this->log();
	}

	public static function getCodeMessage($code){
		return isset(static::$codes[$code]) ? static::$codes[$code] : static::$unsetCodeMessage;
	}

	/*public function log(){

	}*/

}
