<?php
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;
?><!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Paradigm</title>
<link rel="stylesheet" type="text/css" href="/assets/reset.css" />
<script src="/assets/jquery.1.8.min.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/ace.css" />
<script src="/assets/ace.js"></script>
<script>

$(function(){
	$('.ace-smile').each(function(){
		var $el = $(this);
		$.getJSON('/ace/api/demo/smile',function(data){
			if (!(data && data.data))
				return $el.html('api error' + (data.error?': '+data.error:''));
			$el.html(data.data);
		});
	});
});

</script>

<style type="text/css">
body {
	font-family: Helvetica,arial,sans-serif;
}
a {
	text-decoration: none;
	color: #9e6618;
}
a:hover {
	text-decoration: underline;
}
.page {
	width: 960px;
	margin: 20px auto;
}
.page-title {
	padding: 1em 0 1.4em 0;
	font-size: 25px;
	text-transform: uppercase;
}
.page-title span:nth-child(1) {
	font-weight: 300;
	letter-spacing: 0.19em;
}
.page-title span:nth-child(2) {
	font-weight: 500;
	letter-spacing: 0.15em;
}
.instagram-container {
	float: left;
	width: 660px;
}
.twitter-container {
	float: left;
	width: 300px;
}
.carousel-container {
	padding: 16px 0 0 0;
	margin-bottom: 14px;
}
.ace-twitter.type-featured .ace-twitter-wrap {
	background-position: 933px 39px;
}
</style>

</head>
<body>

<div class="page">

	<h1 class="page-title"><span>Para</span><span>digm</span></h1>

	<div class="instagram-container">
		<script type="text/ace-instagram">{
			query: 'users/227962011/media/recent'
		}</script>
	</div>

	<div class="twitter-container">
		<script type="text/ace-twitter">{
			screenName: 'jewelmint'
			,numGet: 10
			,numShow: 4
			,scroll: 'y'
			,type: 'sidebar'
		}</script>
	</div>

	<div class="clear">&nbsp;</div>

	<div class="carousel-container">
		<script type="text/ace-carousel">{
				imgs: [
					'http://remotweb.com/files/uploads/2014/06/fashion_jewelry.jpg'
					,'http://delsonjewelry.com/site/images/stories/virtuemart/product/three-stones-engagement-ring.jpg'
					,'http://thechrisellefactor.com/wp-content/uploads/2012/04/Chanel_Wallet_Chriselle1.jpg'
					,'http://thechrisellefactor.com/wp-content/uploads/2012/09/Peplum_Leather_zara_top_Valentino_rockstud_leopard_shoes_Purse_chriselle_Lim_5.jpg'
					,'http://glambistro.com/wp-content/uploads/2013/10/summer-arm-candy.jpg'
					,'http://www.mychicadventure.com/wp-content/uploads/2014/05/boho-chic-2.jpg'
				]
				,dims: '195x148'
				,speed: 300
				,shadbox: true
		}</script>
	</div>

	<div class="twitter-horizontal-container">
		<script type="text/ace-twitter">{
			screenName: 'jewelmint'
			,numGet: 10
			,numShow: 1
			,scroll: 'x'
			,type: 'featured'
		}</script>
	</div>

	API /smile: <span class="ace-smile"></span>

	<div>
		<?php
			$c = new ReflectionClass('\ace\Ace');
			$methods = array();
			Ace::varDump($c->getDocComment());
			foreach ($c->getMethods() as $v) {
				Ace::varDump($v);
				if ($v->name[0] == '_'/* || !$v->isPublic()*/)
					return;
				//Ace::varDump($v->getDocComment());
				$methods[] = $v->name;
			}
			sort($methods);
			Ace::varDump($methods);
		?>
	</div>

</div>

</body>
</html>