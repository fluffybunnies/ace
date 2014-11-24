<?php

if (!empty($_GET['debug'])) {
	ini_set('display_errors', 1);
	error_reporting(E_ALL);
}

//enable third party cookies in ie
//header('P3P: CP="NOI ADM DEV COM NAV OUR STP"');

define('WEBROOT', dirname(__FILE__));
//define('REPOROOT', dirname(__DIR__.'/..'));
define('APP_PATH', WEBROOT.'/ace');
include APP_PATH.'/autoload.php';
use \ace\Ace;
define('REQUEST_PATH', rtrim( Ace::g($_SERVER, array('DOCUMENT_URI','REDIRECT_URL'), ''), '/' ));

Ace::loadConfig( WEBROOT.'/config.php', WEBROOT.'/config.local.php' );

/*
// hide secret environment vars if using elastic beanstalk...
foreach (array('RDS_HOSTNAME','RDS_PORT','RDS_USERNAME','RDS_PASSWORD','RDS_DB_NAME','AWS_SECRET_KEY','AWS_ACCESS_KEY_ID',) as $k) {
	define($k, Ace::g($_SERVER,$k));
	unset($_SERVER[$k]);
	unset($_SERVER['REDIRECT_'.$k]);
}
*/

use \ace\Router;
Router::route(REQUEST_PATH);

