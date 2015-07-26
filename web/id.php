<?php
if (!defined('WEBROOT'))
	exit;

echo json_encode(array(
	't' => Ace::dateUtc('r'),
	'repo' => preg_replace('/.*((git@github\.com:.+\.git)|(https?:\/\/github\.com.+\.git))([\s\S])*/','$1',`git remote -v`),
	'tag' => str_replace("\n",'',`git describe --tags 2> /dev/null`),
	'branch' => preg_replace('/[\n* ]/','',`git branch | grep '\*' | head -n1`),
	'commit' => str_replace("\n",'',`git rev-parse HEAD`),
	'ip' => \ace\Ace::clientIp(),
	'php' => phpversion(),
	//'whoami' => str_replace("\n",'',`whoami`),
));

exit;
\ace\Ace::varDump($_SERVER);
phpinfo();
