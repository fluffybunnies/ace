<?php

spl_autoload_register(function($name) {
	//static $dirCache = array();

	if (strpos($name,'\\') !== false) {
		$path = str_replace('\\','/',$name);
		$class = basename($path);
		$dir = \WEBROOT.'/'.dirname($path);

		if (is_file($dir.'/'.$class.'.php')) {
			require_once $dir.'/'.$class.'.php';
			return;
		}
	}
});
