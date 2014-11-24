ace
===

Lightweight FE/BE Framework. Provides tools for launching prototype websites.


### Install
```
mkdir ./mysite && npm install aced && mv ./node_modules/aced/* ./mysite && cd ./mysite && ls
```
Or, deploy to Amazon EC2 with Sire
```
# Deploy sire to remote server (run this locally):
~/sire/index.sh _deploy
# Deploy ace on remote server (run this on remote server):
/root/sire/index.sh ace
```


### Front End - UI
http://ace.fabfitfun.com/demo

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


### Back End
http://www.example.com/demo
