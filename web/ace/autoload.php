<?php

//spl_autoload_register(function($name) {
spl_autoload_register(function($name) use ($mapping) {
	static $dirCache = array();

	if (strpos($name,'\\') !== false) {
		$path = str_replace('\\','/',$name);
		$class = basename($path);
		$dir = \WEBROOT.'/'.dirname($path);

		if (is_file($dir.'/'.$class.'.php')) {
			require_once $dir.'/'.$class.'.php';
			return;
		}

		/*$p = strpos($name, 'Aws\\');
		if ($p !== false) {
			echo $name."<br />";
			echo $p."<br />";
			$k = substr($name, $p);
			exit($k);
			if (isset($mapping[$k])) {
				//
			}
		}*/
	}
});
