<?php

spl_autoload_register(function($name) {
	if (strpos($name,'\\') === false)
		return;
	if (strpos($name,'ace\\') !== 0) // dont overwrite other autoloaders
		return;
	$path = str_replace('\\','/',$name);
	$class = basename($path);
	$dir = \WEBROOT.'/'.dirname($path);
	$file = $dir.'/'.$class.'.php';
	if (is_file($file))
		require_once $dir.'/'.$class.'.php';
});
