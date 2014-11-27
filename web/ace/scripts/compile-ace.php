<?php
namespace ace\scripts;
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;


$modules = Ace::getConfig('compile');


$ext = end(explode('.',REQUEST_PATH));
if (!empty($_GET['debug'])) {Ace::varDump($ext);}
if (!($ext == 'js' || $ext == 'css'))
	exit;


$res = '';
foreach ($modules as $module)
	$res .= get("ace.$module.$ext");
if ($ext == 'js')
	$res .= get('ace.init.js');
$hash = md5($res);
$etag = '"'.$hash.'"';
header('Content-Type: text/'.($ext=='css'?'css':'javascript'));
header('ETag: '.$etag);
// i dont see any possible problem with this line but something is still breaky eeeevry so often...
//header('Content-Length: '.strlen($res));
echo $res;
exit;


function get($basename){
	$assetsDir = WEBROOT.'/web/assets';
	$r = @file_get_contents("$assetsDir/$basename");
	if (!empty($_GET['debug'])) {Ace::varDump("$assetsDir/$basename");}
	if ($r === false)
		return '';
	$res .= "/* File: $basename */\n$r\n\n";
}