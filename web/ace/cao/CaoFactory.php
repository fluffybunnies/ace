<?php
namespace ace\cao;

class CaoFactory {

	protected static $caoClassnameCache = array();

	public static function getAdapterProxyInstance($toProxy) {
		return self::getProxyInstance($toProxy);
	}


	/**
	* Accepts:
	*		(a) Object instance to be wrapped
	*		(b) String class name to be instantiated as needed
	*
	*	If cannot be proxied:
	*		(a) If instances passed, instance is simply returned
	*		(b) If string class name pased, instance of class name returned
	*
	* @param mixed $toProxy
	* @return object
	*/
	public static function getProxyInstance($toProxy, $caoDriver=false) {
		$isInstance = is_object($toProxy);
		$className = ($isInstance ? get_class($toProxy) : self::normalizeClassName($toProxy));
		
		if (self::canProxy($className)) {
			$proxyClass = self::classNameToCaoClassName($className, $caoDriver);
			return new $proxyClass($toProxy);
		}
		
		return ($isInstance ? $toProxy : new $className());
	}

	protected static function canProxy($className) {
		// check against blacklist
		return true;
	}

	protected static function classNameToCaoClassName($className, $caoDriver=false){
		/* this is where the magic happens, e.g.
			className = ace\controllers\Products > key = ace\controllers\Products_VersionController > return self::$caoClassnameCache[$key] (\ace\cao\VersionController)
			className = ace\adapters\Products > key = ace\adapters\Products_Version > return return self::$caoClassnameCache[$key] (\ace\cao\Version)
		*/
		return $className;
	}

	protected static function normalizeClassName($className) {
		// strip leading slash for global namespaces
		return $className[0] == '\\' ? substr($className,1) : $className;
	}

}