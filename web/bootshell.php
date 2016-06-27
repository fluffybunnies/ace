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
define('REQUEST_METHOD',
	isset($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE']) ? $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] :
	(isset($_POST['HTTP_METHOD_OVERRIDE']) ? $_POST['HTTP_METHOD_OVERRIDE'] :
	(isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] :
	'GET'))
);
define('REQUEST_PATH', resolveRequestPath());

include APP_PATH.'/autoload.php';

\ace\Ace::loadConfig( WEBROOT.'/config.php', WEBROOT.'/config.local.php' );

/*
// hide secret environment vars if using elastic beanstalk...
foreach (array('RDS_HOSTNAME','RDS_PORT','RDS_USERNAME','RDS_PASSWORD','RDS_DB_NAME','AWS_SECRET_KEY','AWS_ACCESS_KEY_ID',) as $k) {
	define($k, Ace::g($_SERVER,$k));
	unset($_SERVER[$k]);
	unset($_SERVER['REDIRECT_'.$k]);
}
*/

if (REQUEST_PATH !== null) {
	\ace\Router::route(REQUEST_PATH, REQUEST_METHOD);
}



function resolveRequestPath(){
	$p = null;
	if ($p === null && isset($_SERVER['REQUEST_URI'])) { // we could be cli, but we could also be in poorly configured vm
		$p = str_replace('?'.(isset($_SERVER['QUERY_STRING'])?$_SERVER['QUERY_STRING']:''), '', $_SERVER['REQUEST_URI']);
	}
	if ($p === null) { // swapped placement of this with above REQUEST_URI method to cater to some VMs
		$p = isset($_SERVER['DOCUMENT_URI']) ? $_SERVER['DOCUMENT_URI'] :
			(isset($_SERVER['REDIRECT_URL']) ? $_SERVER['REDIRECT_URL'] :
			null)
		;
	}
	return $p === null ? null : rtrim($p,'/');
}



