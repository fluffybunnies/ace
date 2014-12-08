<?php // dev playground
if (!defined('WEBROOT'))
	exit;
use \ace\Ace;

//header('Content-Type', 'text/plain');
function doIt($str){
	try {
	return array(
		'raw' => $str,
		'html_entity_decode' => html_entity_decode($str),
		'html_entity_decode' => html_entity_decode($str, ENT_QUOTES),
		'html_entity_decode ENT_QUOTES' => html_entity_decode($str, ENT_QUOTES, 'utf-8'),
		'html_entity_decode ENT_QUOTES | ENT_HTML5' => html_entity_decode($str, ENT_QUOTES | ENT_HTML5),
		'html_entity_decode ENT_QUOTES | ENT_HTML5 utf-8' => html_entity_decode($str, ENT_QUOTES | ENT_HTML5, 'utf-8'),
		'mb_convert_encoding utf-8 HTML-ENTITIES' => mb_convert_encoding($str, 'utf-8', 'HTML-ENTITIES'),
		'mb_convert_encoding null HTML-ENTITIES' => mb_convert_encoding($str, null, 'HTML-ENTITIES'),
		'thing' => preg_replace_callback("/(&#[0-9]+;)/", function($m) { return mb_convert_encoding($m[1], "UTF-8", "HTML-ENTITIES"); }, $str),
		'sp' => sp($str),
	);
	} catch (Exception $e) {
		echo "$e";
	}
}

function sp($v){
	$v = html_entity_decode($v);
	$v = preg_replace_callback('/(&#[0-9]+;)/',function($m){
		return mb_convert_encoding($m[1], null, "HTML-ENTITIES");
	},$v);
}

v(doIt('&#8216;  &#8217; &quot;&quot; &amp; &apos;&apos; :: &copy; &#169; &#xA9;'));
echo "\n\n\n";
v(doIt('It&#8216;s It&#8217;s in &quot;the&quot; water &amp; all o&apos;er o&apos;er the place! &copy; &#169; &#xA9; '));
echo "\n\n\n";
v(doIt('Fovi&#269;'));
echo "\n\n\n";
v(doIt('http://uat-wordpress.luckyshops.com/?post_type=slideshow&#038;p=2598'));

function v($v){
	Ace::varDump($v);
}

exit;

?><!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="/assets/reset.css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
<style type="text/css">
</style>
<script>

function getLastMod(url,cb){
  $.ajax({
    type: 'HEAD'
    ,cache: true
    ,url: url
    ,success: function(data,status,xhr){
      cb(false, xhr.getResponseHeader('Last-Modified'));
    }
    ,error: function(xhr,status,err){
      cb(err);
    }
  });
}

/*getLastMod('/00test.php',function(err,res){
  if (err)
    return alert('Oops: '+err);
  alert('Last Mod: '+res);
});*/

</script>

</head>
<body>


</body>
</html>