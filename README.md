ace
===

Lightweight FE/BE Framework. Provides tools for launching prototype websites. May assist the M and C for other MVCs.

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
		'/imgs/fashion_jewelry.jpg'
		,'/imgs/three-stones-engagement-ring.jpg'
		,'/imgs/Chanel_Wallet_Chriselle1.jpg'
		,'/imgs/Peplum_Leather_zara_top_Valentino_rockstud.jpg'
		,'/imgs/summer-arm-candy.jpg'
		,'/imgs/boho-chic-2.jpg'
	]
	,dims: '195x148'
	,speed: 300
	,shadbox: true
}</script>
```

##### Chat
See demo page and web/assets/ace.chat.js

Uses arrrr for backend (https://github.com/fluffybunnies/arrrr)


### Front End - Utils
```
// 'ace.util.'+Object.keys(ace.util).sort().join('\nace.util.')
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
// ready() is ambivalent to whether or not the event has already been triggered
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
Basic API skeleton. Includes a few routes as examples:

##### Smile
http://ace.fabfitfun.com/ace/api/demo/smile

##### Send email with attachments
http://ace.fabfitfun.com/ace/api/demo/email-csv-php?email_to=alec@luckygroupinc.com



### Back End - Utils
```
Ace::getConfig
	Request value loaded from config.php / config.local.php
Ace::g
	Example: Ace::g($_POST,'param') instead of if (isset($_POST['param'] &&...
Ace::onHttps
	Works behind ELB using HTTP_X_FORWARDED_PROTO
Ace::enforceHttps
	Redirect to https://self
Ace::vres
	Optimize asset caching by marking url with file-modified-time
Ace::e
	For debugging: exit with $message
Ace::isAssoc
	Returns true if array does not have continuously ascending numeric keys
Ace::varDump
	HTML-formatted alternative to var_dump
Ace::putDeep
	Insert into an array without checking isset()
	Example:
		$house = array(
			'bedroom' => array('bed','dresser'=>array('pants')),
		);
		Ace::putDeep($house,'kitchen>oven','bread');
		Ace::putDeep($house,'bedroom>dresser[]','shirt');
		Ace::varDump($house);
Ace::onMobile
	Uses list from http://detectmobilebrowsers.com/ against HTTP_USER_AGENT
Ace::clientIp
	Works behind ELB and other proxies
Ace::curlGet
	curlGet( $url [, $params [, $curlOpts ]] )
Ace::curlPost
	curlPost( $url [, $params [, $curlOpts [, $urlEncodedParams = false ]]] )
	$urlEncodedParams mimicks application/x-www-form-urlencoded as opposed to the default multipart/form-data
Ace::curlDelete
	curlDelete( $url [, $params [, $curlOpts ]] )
```


### Back End - Node
If you deployed using Sire, node will be installed with the latest stable version.

##### Send email with attachments
```
node ./bin/demo-emailCsv.js --emailTo='alec@luckygroupinc.com' --emailFrom='acquiremint@beachmint.com'
```

##### Utils
```
// 'ut.'+Object.keys(require('./ut.js')).sort().join('\nut.')
ut.dateDiff
ut.fileTime
ut.getFirstChild
ut.getFirstKey
ut.padZ
ut.prettyTime
ut.spawn
ut.stats
ut.superTrim
ut.trim
```


### Health Check
http://ace.fabfitfun.com/hc


### Status Page
http://ace.fabfitfun.com/id


### To Do
- Add: Resource, et al
- Generate ace.min.js/ace.min.css on start + post-gitsync / file change
- Unit tests
- More descriptive error messages for missing initial configs


