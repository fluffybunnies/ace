<?php
namespace ace\adapters;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	static public $unsetCodeMessage = 'Unset adapter code';

	static public $codes = array(
		3001 => 'Adapter method not found',
		3002 => 'Missing Input',
		3003 => 'Invalid Input',
		3004 => 'Not Authorized',

		3010 => 'Not Implemented',
		3011 => 'Deprecated',
		3012 => 'Not Allowed',
		3013 => 'Not Available',

		3040 => 'Source file not found',
		3041 => 'Invalid file type',
		3042 => 'Failed to imagecreate() file',
		3043 => 'Failed to resample',
		3044 => 'Failed to save image',

	);

}