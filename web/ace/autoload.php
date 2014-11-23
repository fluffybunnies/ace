<?php

spl_autoload_register(function($name) {
	if (strpos($name,'\\') === false)
		return;
	if (strpos($name,'\\') === 0)
		$name = '\\'.$name;
	$path = str_replace('\\','/',$name);
	$class = basename($path);
	$dir = \WEBROOT.'/'.dirname($path);

	if (is_file($dir.'/'.$class.'.php'))
		require_once $dir.'/'.$class.'.php';
});
