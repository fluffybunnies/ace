<?php
namespace ace\scripts;
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;


$modules = Ace::getConfig('compile');


$path = explode('.',REQUEST_PATH);
$ext = end($path);
if (!($ext == 'js' || $ext == 'css'))
	exit;


$res = get("ace.$ext");
foreach ($modules as $module)
	$res .= ($ext=='js'?';':'') . get("ace.$module.$ext");
if ($ext == 'js')
	$res .= get('ace.init.js');
$hash = md5($res);
$etag = '"'.$hash.'"';
header('Content-Type: '.($ext=='css'?'text/css':'application/javascript'));
header('ETag: '.$etag);
// i dont see any possible problem with this line but something is still breaky eeeevry so often...
//header('Content-Length: '.strlen($res));
echo $res;
exit;


function get($basename){
	$assetsDir = WEBROOT.'/assets';
	$r = @file_get_contents("$assetsDir/$basename");
	if ($r === false)
		return '';
	return "/* File: $basename */\n$r\n\n";
}