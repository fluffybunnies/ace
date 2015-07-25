<?php
namespace ace\adapters;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	protected static $missingCodeMessage = 'UNSET ADAPTER CODE!';

	static protected $codes = array(
		3001 => 'Adapter method not found',
		3002 => 'Missing Input',
		3003 => 'Invalid Input',
		3004 => 'Not Authorized',
		3005 => 'Not Implemented',

		3007 => 'Error from lib',
		3008 => 'Unexpected response from external api',
		3009 => 'Error response from external api',


		3040 => 'Source file not found',
		3041 => 'Invalid file type',
		3042 => 'Failed to imagecreate() file',
		3043 => 'Failed to resample',
		3044 => 'Failed to save image',

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
		return isset(self::$codes[$code]) ? self::$codes[$code] : 'UNSET ADAPTER CODE!';
	}

}