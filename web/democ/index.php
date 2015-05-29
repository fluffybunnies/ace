<?php
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;

$files = scandir(__DIR__);
$imgs = array();
foreach ($files as $file) {
	if (strpos($file,'.png') !== false)
		$imgs[] = '/democ/'.$file;
}
usort($imgs,function($a,$b){
	return filemtime(WEBROOT.$a) - filemtime(WEBROOT.$b);
});

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
<script type="text/ace-carousel">{
	imgs: <?php echo json_encode($imgs); ?>
	,dims: '195x148'
	,speed: 300
	,shadbox: true
}</script>
</div>

</body>
</html>