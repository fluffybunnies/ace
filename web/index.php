<?php

include dirname(__FILE__).'/bootshell.php';
use \ace\Ace;


/*
// load wordpress
define('WP_USE_THEMES', true);
require(WEBROOT.'/wp-blog-header.php');
exit;
*/


// 404
header(Ace::g($_SERVER,'SERVER_PROTOCOL','HTTP/1.0').' 404 Not Found');
exit;
