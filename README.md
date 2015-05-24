ace
===

Lightweight FE/BE Framework. Provides tools for launching prototype websites.

Demo: [http://ace.fabfitfun.com/demo](http://ace.fabfitfun.com/demo)

<!--
### Install via npm
```bash
mysite=./mysite; if [ ! -d "$mysite" ]; then mkdir -p "$mysite"; fi; npm install --prefix /tmp aced && cp -ri /tmp/node_modules/aced/* "$mysite" && cd "$mysite" && ls -l
```
-->
### Install
```bash
git clone git@github.com:fluffybunnies/ace.git path-to-project
```
Or, deploy directly to an ubuntu instance with [Sire](https://github.com/fluffybunnies/sire)
```bash
# Deploy sire to remote server:
./sire/index.sh _deploy
# Deploy ace to remote server:
./sire/signal.sh ace
```


### Front End - UI

##### Instagram Gallery
- Plug and play with a simple gallery id
- Or configure an api mapping to generate dynamic galleries
```html
<script type="text/ace-instagram">{
	query: 'users/227962011/media/recent'
}</script>
```
```javascript
ace.ui.widgetize('instagram',$('.gallery01'),{
	query: 'users/%userId%/media/recent'
	,fetch: {
		userId: ['users/search?q=markthegonzales',function(res){
			return res.data[0].id;
		}]
	}
	,type: 'squares med'
	,num: 10
	,hoverFadeIn: true
	,shadbox: true
});
```

##### Twitter Feed
- Horizontal or vertical ticker animation
```html
<script type="text/ace-twitter">{
	screenName: 'jewelmint'
	,scroll: 'x'
}</script>
```
```javascript
ace.ui.widgetize('twitter',$('.sidebar-social'),{
	screenName: 'pandaexpress'
	,numGet: 10
	,numShow: 3
	,scroll: 'y'
	,scrollDelay: 8000
	,scrollSpeed: 1000
	,type: 'sidebar'
});
```

##### Simple Carousel
```html
<script type="text/ace-carousel">{
	imgs: [
		'/imgs/fashion_jewelry.jpg'
		,'/imgs/three-stones-engagement-ring.jpg'
		,'/imgs/Chanel_Wallet_Chriselle1.jpg'
		,'/imgs/Peplum_Leather_zara_top_Valentino_rockstud.jpg'
		,'/imgs/summer-arm-candy.jpg'
		,'/imgs/boho-chic-2.jpg'
	]
}</script>
```
```javascript
ace.ui.widgetize('carousel',$('.nyfw-2015'),{
	imgs: albumNYFW2015
	,dims: '195x148'
	,speed: 300
	,shadbox: true
});
```

##### Chat
See [demo page](http://ace.fabfitfun.com/demo) and web/assets/ace.chat.js

Uses [arrrr](https://www.npmjs.com/package/arrrr) module for backend

##### Tooltips
- Place smart tooltips on any html element
- Intelligent positioning adapts to custom css styles and always remains within viewport
- Activated by hover, click, or any other custom event
- Supports tip activation groupings
```javascript
ace.tooltip($('#look-at-me'),{
	content: 'I do cool things!'
});

// or...

ace.tooltip($('#me-too'),{
	content: 'Click here for lazers'
	,offset: 10 // null = width of arrow
	,pos: 'top' // top bot left right
	,fixed: false
	,group: null // tips with the same group will show/hide at the same time
	,classes: 'tooltip-mkII'
	,showEvt: 'mouseover'
	,hideEvt: 'mouseout'
});
```

##### ShadBox
- Bring images to life with this shadow box modal
- Makes load-time look good, with options to customize the animation
- Plugs directly into other ace modules such as the photo carousel and instagram gallery via a simple on/off option
```javascript
ace.shadbox('/albums/2015/some.sweet.image.jpg');

// or...

ace.shadbox('/albums/2014/hard.rock.25may2014.jpg',{
	viewport: {
		padding: {x:.05, y:.05}
	}
	,anim: {
		fadeSpeed: 100
		,delay: 300
		,contentExpandSpeed: 300
		,contentFadeInSpeed: 300
	}
});
```

##### Pop
- Use as a simple alert dialog
- Or extend with versatile classes and bindings
```
amint.pop('An email has been sent with a link to reset your password.');

// or...

ace.pop({
	header: 'Are you sure?'
	,body: 'Clicking Ok will delete everything you own.'
	,btns: [
		['cancel','Cancel']
		,['ok','Ok']
	]
	,exit_btn: true
	,position: 'fixed'
	,true_center: false
}).on('ok',function(){
	forfeitTheWorld();
});
```


### Front End - Utils
```javascript
// 'ace.util.'+Object.keys(ace.util).sort().join('\nace.util.')
ace.util.arrayFilter
ace.util.capitalize
ace.util.escapeHtml
ace.util.escapeRegEx
ace.util.formatInteger
ace.util.formatPlace
ace.util.formatTimeAgo
ace.util.getCookie
ace.util.getImageToWindowFit
ace.util.getParameterByName
ace.util.getViewportScrollY
ace.util.onTouchDevice
ace.util.parseCookies
ace.util.rand
ace.util.setCookie
ace.util.strToClass
ace.util.trueDim
```


### Front End - Bus
All widgets (and the global ace.bus) extend AceBase - a standard event emitter with a "ready" implementation
```javascript
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
```php
Ace::getConfig
	Request value loaded from config.php / config.local.php
Ace::g
	Example:
		if (Ace::g($_POST,'param') == 'abc') ...
		instead of
		if (isset($_POST['param']) && $_POST['param'] == 'abc') ...
	Example:
		$host = Ace::g($_SERVER,array('HOST_NAME','SERVER_NAME'));
		instead of
		$host = isset($_SERVER['HOST_NAME']) ? $_SERVER['HOST_NAME'] : isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : null;
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
```javascript
node ./bin/demo-emailCsv.js --emailTo='alec@luckygroupinc.com' --emailFrom='acquiremint@beachmint.com'
```

##### Utils
```javascript
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
- Add: Resource, SocialShare, et al
- Generate ace.min.js/ace.min.css on start + post-gitsync / file change
- Unit tests
- More descriptive error messages for missing initial configs



