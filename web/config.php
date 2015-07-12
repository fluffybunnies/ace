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
	'fb',
	'fireworks',
	'pop',
	'shadbox',
	'tooltip',
	'ui.carousel',
	'ui.instagram',
	'ui.twitter',
	'highlight',
	'req',
	'resource',
);
if (strpos(Ace::g($_SERVER,'HTTP_REFERER',''), 'nochat=1') !== false) array_unshift($compile, 'chat');

