<?php
if (!defined('WEBROOT'))
	exit;

echo json_encode(array(
	't' => date('r'),
	'repo' => preg_replace('/.*(git@github\.com:.+\.git)([\s\S])*/','$1',`git remote -v`),
	'branch' => preg_replace('/[\n* ]/','',`git branch | grep '\*' | head -n1`),
	'commit' => str_replace("\n",'',`git rev-parse HEAD`),
	'ip' => \ace\Ace::clientIp(),
	'whoami' => str_replace("\n",'',`whoami`),
	'REPOROOT' => REPOROOT,
));

exit;
\ace\Ace::varDump($_SERVER);
phpinfo();
