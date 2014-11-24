ace
===

Lightweight FE/BE Framework. Provides tools for launching prototype websites.

Demo: http://ace.fabfitfun.com/demo


### Install
```
mkdir ./mysite && npm install aced && mv ./node_modules/aced/* ./mysite && cd ./mysite && ls
```
Or, deploy to Amazon EC2 with Sire (https://github.com/fluffybunnies/sire)
```
# Deploy sire to remote server (run this locally):
~/sire/index.sh _deploy
# Deploy ace on remote server (run this on remote server):
/root/sire/index.sh ace
```


### Front End - UI

##### Instagram Gallery
```
<script type="text/ace-instagram">{
	query: 'users/227962011/media/recent'
}</script>
```

##### Twitter Feed
```
<script type="text/ace-twitter">{
	screenName: 'jewelmint'
	,numGet: 10
	,numShow: 3
	,scroll: 'y'
	,type: 'sidebar'
}</script>
```

##### Simple Carousel
```
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
```


### Front End - Utils
```
// ace.util.'+Object.keys(ace.util).sort().join('\nace.util.')
ace.util.arrayFilter
ace.util.capitalize
ace.util.cookie
ace.util.escapeHtml
ace.util.escapeRegEx
ace.util.formatInteger
ace.util.formatPlace
ace.util.formatTimeAgo
ace.util.getImageToWindowFit
ace.util.getParameterByName
ace.util.getViewportScrollY
ace.util.onTouchDevice
ace.util.rand
ace.util.strToClass
ace.util.trueDim
```


### Front End - Bus
All widgets (and the global ace.bus) extend AceBase - a standard event emitter with a "ready" implementation
```
ace.bus.ready('something-happened',function(){
	console.log("Let's do something once!");
});
ace.bus.on('something-happened',function(){
	console.log("Let's do something everytime!");
});
ace.bus.trigger('something-happened');
ace.bus.trigger('something-happened');
/* ...
Let's do something once!
Let's do something everytime!
Let's do something everytime!
*/
```


### Back End - API
Basic API skeleton. Ex: http://ace.fabfitfun.com/ace/api/demo/smile


### Back End - Utils
```
getConfig
	Request value loaded from config.php / config.local.php
g
	Example: Ace::g($_POST,'param') instead of if (isset($_POST['param'] &&...
onHttps
	Works behind ELB using HTTP_X_FORWARDED_PROTO
enforceHttps
	Redirect to https://self
vres
	Optimize asset caching by marking url with file-modified-time
e
	For debugging: exit with $message
isAssoc
	Returns false if array does not have continuously ascending numeric keys
varDump
	HTML-formatted alternative to var_dump
putDeep
	Insert into an array without checking isset()
		Example:
			$house = array(
				'bedroom' => array('bed','dresser'=>array('pants')),
			);
			Ace::putDeep($house,'kitchen>oven','bread');
			Ace::putDeep($house,'bedroom>dresser[]','shirt');
			Ace::varDump($house);
onMobile
	Uses list from http://detectmobilebrowsers.com/ against HTTP_USER_AGENT
clientIp
	Works behind ELB and other proxies
```

### Health Check
http://ace.fabfitfun.com/hc


### Status Page
http://ace.fabfitfun.com/id


