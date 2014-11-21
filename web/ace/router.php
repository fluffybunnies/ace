<?php

use \ace\Ace;
use \ace\Api;

$apiPath = '/ace/api/';
if (strpos(REQUEST_PATH, $apiPath) === 0) {
	Api::request( substr(REQUEST_PATH, strlen($apiPath)) );
	exit;
}
