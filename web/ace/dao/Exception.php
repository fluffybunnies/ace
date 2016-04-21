<?php
namespace ace\dao;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	static public $unsetCodeMessage = 'Unset dao code';

	static public $codes = array(
		4001 => 'Dao method not found',
		4002 => 'Missing Input',
		4003 => 'Invalid Input',
		4004 => 'Not Authorized',
		4008 => 'DB Error',

		4010 => 'Not implemented',
		4011 => 'Deprecated',
		4012 => 'Not Allowed',

		4015 => 'If either limit or offset is specified, both must be',
		4016 => 'Limit and offset required',
		4017 => 'Limit too large',

		4020 => 'JSON input failed to parse',
		4021 => 'Invalid timestamp input',
		4022 => 'Maxlength exceeded',
		4023 => 'Invalid number',
		4024 => 'Invalid type',
		4025 => 'Failed regex restriction',
		4026 => 'Invalid enum',

		4040 => 'Unsupported eav type',
		4041 => 'Must supply type if creating new eav',

		// 410x prefix reserved for not found
		4100 => 'Item not found',

	);

}
