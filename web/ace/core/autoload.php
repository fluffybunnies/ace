<?php

spl_autoload_register(function($name) {
	if (strpos($name,'\\') === false)
		return;
	if (strpos($name,'ace\\') !== 0) // dont overwrite other autoloaders
		return;
	$path = str_replace('\\','/',$name);
	$class = basename($path);
	$dir = \ROOT.'/'.dirname($path);
	$file = $dir.'/'.$class.'.php';
	//echo "name: $name<br />\npath: $path<br />\nclass: $class<br />\ndir: $dir<br />\nfile: $file";exit;
	if (is_file($file))
		require_once $file;
});
