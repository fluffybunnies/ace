<?php
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;

$r = scandir(__DIR__);
Ace::varDump($r);
exit;

?><!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Demo</title>
<link rel="stylesheet" type="text/css" href="/assets/reset.css" />
<script src="/assets/jquery.1.8.min.js"></script>
<link rel="stylesheet" type="text/css" href="/ace.css" />
<script src="/ace.js"></script>
<script>

</script>

<style type="text/css">
body {
	font-family: Helvetica,arial,sans-serif;
}
</style>

</head>
<body>

<div class="cont">
	<h1></h1>
	<div class="show"></div>
</div>

</body>
</html>