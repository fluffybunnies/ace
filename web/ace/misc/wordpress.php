<?php

namespace ace\misc;

user \ace\Ace;

remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );
add_action('wp_head', '\ace\misc\hook_wphead');
add_action('wp_footer', '\ace\misc\hook_wpfooter');

function hook_wphead(){
  echo '<meta name="description" content="Hope Chapel Long Beach, 5555 Stearns. Sunday service begins at 10:00am." />';
}

function hook_wpfooter(){
	if (!($googleAnalyticsId = Ace::getConfig('googleAnalyticsId')))
		return;
	?>
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', '<?php echo $googleAnalyticsId; ?>', 'auto');
	ga('send', 'pageview');
	</script>
	<?php
}