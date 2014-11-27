<?php
namespace ace\scripts;
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;

$assetsDir = WEBROOT.'/web/assets';
$modules = Ace::getConfig('compile');


$ext = end(explode('.',REQUEST_PATH));
if (!($ext == 'js' || $ext == 'css'))
	exit;


$res = '';
foreach ($modules as $module) {
	$basename = "ace.$module.$ext";
	$r = @file_get_contents("$dir/$basename");
	if ($r === false)
		continue;
	$res .= "/* File: $basename */\n";
	$res .= $r;
	$res .= "\n\n";
}
$hash = md5($res);
$etag = '"'.$hash.'"';
header('Content-Type: text/'.($ext=='css'?'css':'javascript'));
header('ETag: '.$etag);
// i dont see any possible problem with this line but something is still breaky eeeevry so often...
//header('Content-Length: '.strlen($res));
echo $res;
exit;
