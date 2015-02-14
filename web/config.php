<?php
if (!defined('WEBROOT'))
	exit;

use \ace\Ace;

$twitterAppKey = '';
$twitterAppSecret = '';

$awsAccessKey = '';
$awsAccessSecret = '';
$awsRegion = 'us-east-1';

$googleAnalyticsId = '';


$compile = array(
	'chat',
	'fireworks',
	'pop',
	'shadbox',
	'tooltip',
	'ui.carousel',
	'ui.instagram',
	'ui.twitter',
);
if (strpos(Ace::g($_SERVER,'HTTP_REFERER',''), 'debug=1') !== false) array_unshift($compile, 'chat');

