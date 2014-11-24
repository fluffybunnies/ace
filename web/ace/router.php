<?php

use \ace\Ace;
use \ace\Api;

$apiPath = '/ace/api/';
if (strpos(REQUEST_PATH, $apiPath) === 0) {
	Api::request( substr(REQUEST_PATH, strlen($apiPath)) );
	exit;
}

// healthcheck...
if (REQUEST_PATH == '/hc') {
	include WEBROOT.'/hc.php';
	exit;
}
// site info...
if (REQUEST_PATH == '/id') {
	include WEBROOT.'/id.php';
	exit;
}
// demo...
if (REQUEST_PATH == '/demo') {
	include WEBROOT.'/demo.php';
	exit;
}
// homepage
if (REQUEST_PATH == '') {
	include WEBROOT.'/home.php';
	exit;
}
