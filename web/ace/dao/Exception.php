<?php
namespace ace\dao;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	protected static $missingCodeMessage = 'UNSET DAO CODE!';

	static protected $codes = array(
		4001 => 'Dao method not found',
		4002 => 'Missing Input',
		4003 => 'Invalid Input',
		4004 => 'Not Authorized',
		4005 => 'Not Implemented',

		4007 => 'Error from lib',
		4008 => 'Unexpected response from external api',
		4009 => 'Error response from external api',


		4020 => 'JSON input failed to parse',
		4021 => 'Invalid timestamp input',
		4022 => 'Maxlength exceeded',
		4023 => 'Invalid number',
		4024 => 'Invalid type',
		4025 => 'Failed regex restriction',
		4026 => 'Invalid enum',

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
		return isset(self::$codes[$code]) ? self::$codes[$code] : 'UNSET DAO CODE!';
	}

}