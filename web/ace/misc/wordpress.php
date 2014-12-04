<?php

namespace ace\misc;

use \ace\helpers\Tracking;

// disables this: "Changes double line-breaks in the text into HTML paragraphs (<p>...</p>)."
remove_filter('the_content', 'wpautop');
remove_filter('the_excerpt', 'wpautop');

add_action('wp_head', '\ace\misc\hook_wphead');
add_action('wp_footer', '\ace\misc\hook_wpfooter');

function hook_wphead(){
  echo '<meta name="description" content="Hope Chapel Long Beach, 5555 Stearns. Sunday service begins at 10:00am." />';
}

function hook_wpfooter(){
	Tracking::pageView();
}