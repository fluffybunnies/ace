<?php
/*
	Note
		- reply_to is ignored when sending attachments
*/

namespace ace\helpers;
use \ace\Ace;
use \ace\HelperAbstract;


class Tracking extends HelperAbstract {

	public static function pageView(){
		if (($googleAnalyticsId = Ace::getConfig('googleAnalyticsId'))) {
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
	}

}