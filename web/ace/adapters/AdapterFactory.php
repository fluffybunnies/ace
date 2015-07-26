<?php
namespace ace\adapters;

use \ace\adapters\Exception as ApiAdapterException;
use \ace\cao\CaoFactory;


class AdapterFactory {

	/* Create explicit getter if need to make decisions based on arguments, e.g.:
	public static function getSendHub($iWantToUseThisArg=null) {
		return self::getInstance('SendHub');
	}
	*/

	public static function __callStatic($name, $args) {
		if (substr($name,0,3) == 'get') {
			return self::getInstance(substr($name,3));
		}
		throw new ApiAdapterException(3001, null, "AdapterFactory::$name");
	}


	protected static function getInstance($class, $pathPrefix='\\ace\\adapters\\') {
		$class = $pathPrefix . $class;
		return CaoFactory::getAdapterProxyInstance($class);
	}

}
