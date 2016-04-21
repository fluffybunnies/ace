<?php
namespace ace\controllers;

use \ace\core\ExceptionAbstract;

class Exception extends ExceptionAbstract {

	static public $unsetCodeMessage = 'Unset controller code';

	static public $codes = array(
		2001 => 'Controller method not found',
		2002 => 'Missing Input',
		2003 => 'Invalid Input',
		2004 => 'Not Authorized',
		2005 => 'Invalid Auth Parameters',
		2006 => 'Too many requests',
		2007 => 'Error from lib',
		2008 => 'Unexpected response from external api',
		2009 => 'Error response from external api',
		2010 => 'Not implemented',
		2011 => 'Deprecated',
		2012 => 'Not Allowed',

		2015 => 'Max limit exceeded',

		2020 => 'Output file not found',
		2021 => 'Unable to open file for writing',

		2030 => 'Unexpected parsed JSON format',

	);

}
/*
2005 => 2010
2010 => 2020
2011 => 2021
2020 => 2030


*/