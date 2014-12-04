<?php
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;
?><!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Ace | Paradigm</title>
<link rel="stylesheet" type="text/css" href="/assets/reset.css" />
<script src="/assets/jquery.1.8.min.js"></script>
<link rel="stylesheet" type="text/css" href="/ace.css" />
<script src="/ace.js"></script>
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

	var $acePopExample = $('#ace-pop-example').bind('click',function(e){
		e.preventDefault();
		ace.pop({
			header: 'Are you sure?'
			,body: 'Clicking Ok will close this window.<br /><br />...So will clicking Cancel.'
			,btns: [
				['cancel','Cancel']
				,['ok','Ok']
			]
		});
	});
	ace.tooltip($acePopExample, {
		content: 'I has speech!'
		,pos: 'right'
		,offset: 10
	});

	var $aceTooltipExample = $('#ace-tooltip-example').bind('click',function(){return false;});
	ace.tooltip($aceTooltipExample, {
		content: 'Look at me!'
		,pos: 'top'
		,offset: 10
		,group: 1
	});
	ace.tooltip($aceTooltipExample, {
		content: 'I can have multiple tooltips attached.<br />And they always stay on-screen!'
		,pos: 'bot'
		,offset: 10
		,group: 1
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
h3 {
	font-size: 15px;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	margin: 2em 0 1em 0;
	border-bottom: 1px solid #ccc;
	padding-bottom: 0.3em;
}
h3 span {
	font-size: 12px;
	text-transform: none;
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
.ace-example {
	margin-bottom: 14px;
}
.ace-class-description {
	margin-bottom: 14px;
}
.ace-double .ace-example {
	float: left;
	width: 48%;
}
.ace-double .ace-example:nth-child(2) {
	float: right;
}
div.ace-smile {
	padding: 10px;
	display: inline-block; /* for tooltip */
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
					,'http://www.cobymadison.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/17645w_1.jpg'
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

	<div class="ace-double">
		<div class="ace-example">
			<h3>ace.tooltip():</h3>
			<a id="ace-tooltip-example" href="#">Hover me!</a>
		</div>
		<div class="ace-example">
			<h3>ace.pop():</h3>
			<a id="ace-pop-example" href="#">Click on me!</a>
		</div>
		<div class="clear">&nbsp;</div>
	</div>

	<div class="ace-example">
		<h3>Ace API Example <span>(/ace/api/demo/smile)</span>:</h3>
		<div class="ace-smile"></div>
	</div>

	<div class="ace-class-description">
		<h3>Ace PHP Utility Methods <span>(displayed using Ace::varDump)</span>:</h3>
		<?php
			$c = new ReflectionClass('\ace\Ace');
			$methods = array();
			$ignore = array('loadConfig',);
			$pretty = array();
			//Ace::varDump($c->getDocComment());
			foreach ($c->getMethods() as $v) {
				if ($v->name[0] == '_' || !$v->isPublic() || in_array($v->name,$ignore))
					continue;
				$m = array();
				$comment = trim(preg_replace('/(\/\*)|(\*\/)|\*/','',$v->getDocComment()));
				if ($comment)
					$m['comment'] = $comment;
				$methods[$v->name] = $m;
				$pretty[] = 'Ace::'.($v->name . ($comment ? "\n\t$comment" : ''));
			}
			Ace::varDump($methods);
			//if (!empty($_GET['debug'])) echo "\n\n".implode("\n",$pretty)."\n\n";
		?>
	</div>

</div>

<?php include WEBROOT.'/global-footer.php'; ?>

</body>
</html>