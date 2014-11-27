/*

<script type="text/ace-twitter">{
	screenName: 'jewelmint'
	,numGet: 10
	,numShow: 3
	,scroll: 'y'
	,type: 'sidebar'
}</script>

*/

ace.ui.register('twitter',{
	// http://wp.fabfitfun.com/ace/api/twitter/get?route=statuses/user_timeline&p[screen_name]=alecisawesome&p[count]=10
	opts: {
		numGet: 10
		,numShow: 1
		,scroll: 'x'
		,scrollDelay: 8000
		,scrollSpeed: 1000
		,type: ''
	}
	,init: function(){
		var z = this;
		z.tweets = [];
		z.getData(function(){
			z.build();
			z.functionalize();
		});
	}
	,getData: function(cb){
		var z = this;
		$.getJSON('/ace/api/twitter/get',{
			route: 'statuses/user_timeline'
			,p: {
				screen_name: z.opts.screenName
				,count: z.opts.numGet
			}
		},function(data){
			if (data.error)
				return z.log(data.error);
			if (!(data.data instanceof Array))
				return z.log('unexpected response');
			z.data = data.data;
			if (!z.data[0])
				return z.log('no tweets');
			cb();
		});
	}
	,build: function(){
		var z = this
			,x = z.cssKey
		;
		z.$.cont.addClass('has-num-'+z.opts.numShow);
		if (z.opts.scroll)
			z.$.cont.addClass('is-scroll-'+z.opts.scroll);
		$.each(z.opts.type.split(' '),function(i,v){
			z.$.cont.addClass('type-'+v);
		});
		z.$.cont.html('<div class="'+x+'-wrap"><div class="'+x+'-wrap2">'
			+ '<div class="'+x+'-tweets_cont"></div>'
			+ '<div class="clear">&nbsp;</div>'
		+ '</div></div>');
		z.$.tweetsCont = z.$.cont.find('div.'+x+'-tweets_cont');
		z.$.tweets = $([]);
		$.each(z.data,function(i,tweet){
			var item = {
				$: {}
			};
			item.$.cont = $('<div class="'+x+'-tweet" style="display:none;"><div class="'+x+'-tweet-wrap"><div class="'+x+'-tweet-wrap-inner">'
				+ '<div class="'+x+'-tweet-text">'+z.formatText(tweet)+'</div>'
				+ '<div class="'+x+'-tweet-time">'+ace.util.formatTimeAgo(tweet.created_at)+'</div>'
			+ '</div></div></div>');
			item.$.wrap = item.$.cont.find('div.'+x+'-tweet-wrap')
			item.$.wrapInner = item.$.cont.find('div.'+x+'-tweet-wrap-inner')
			if (i < z.opts.numShow)
				item.$.cont.css('display','');
			z.$.tweetsCont.append(item.$.cont);
			z.tweets.push(item);
		});
	}
	,functionalize: function(){
		var z = this
			,x = z.cssKey
		;
		z.setUpScroll();
	}
	,formatText: function(tweet){
		var text = tweet.text
			,match = {}
		;
		$.each(tweet.entities.urls,function(i,item){
			var url = item.url;
			if (match[url])
				return true;
			match[url] = true;
			url = ace.util.escapeRegEx(url);
			text = text.replace(new RegExp('('+url+')','g'),'<a href="$&" target="_blank">$&</a>');
		});
		match = {};
		$.each(tweet.entities.hashtags,function(i,item){
			if (match[item.text])
				return true;
			match[item.text] = true;
			text = text.replace(new RegExp('#('+item.text+')','g'),'<a href="https://twitter.com/search?q=%23$1&src=hash" target="_blank">#$1</a>');
		});
		return text;
	}
	,setUpScroll: function(){
		var z = this;
		z.topIndex = 0;
		if (!z.opts.scroll || z.opts.numShow >= z.tweets.length)
			return;
		if (z.opts.scroll != 'x' && z.opts.scroll != 'y')
			return z.log('invalid scroll option',z.opts.scroll);
		setTimeout(scroll,z.opts.scrollDelay);
		function scroll(){
			var outgoingTweet = z.tweets[z.topIndex]
				,incomingTweet = z.tweets[(z.topIndex+z.opts.numShow)%z.tweets.length]
				,outgoingAnim,incomingAnim,autoValue
			;

			if (z.opts.scroll == 'x') {
				outgoingTweet.$.wrap.css('width',outgoingTweet.$.cont.width()+'px');
				incomingTweet.$.cont.css({display:'',width:'auto'});
				autoValue = incomingTweet.$.cont.width();
				incomingTweet.$.cont.css('width',0);
				incomingTweet.$.wrap.css('width',autoValue+'px');
				outgoingAnim = { width: 0 };
				incomingAnim = { width: autoValue+'px' };
			} else {
				outgoingTweet.$.wrap.css('height',outgoingTweet.$.cont.height()+'px');
				incomingTweet.$.cont.css({display:'',height:'auto'});
				autoValue = incomingTweet.$.cont.height();
				incomingTweet.$.cont.css('height',0);
				incomingTweet.$.wrap.css('height',autoValue+'px');
				outgoingAnim = { height: 0 };
				incomingAnim = { height: autoValue+'px' };
			}

			outgoingTweet.$.cont.animate(outgoingAnim,{
				duration: z.opts.scrollSpeed
				,complete: function(){
					z.$.tweetsCont.append(outgoingTweet.$.cont.css('display','none'));
					setTimeout(scroll,z.opts.scrollDelay);
				}
			});
			incomingTweet.$.cont.animate(incomingAnim,{
				duration: z.opts.scrollSpeed
			});

			z.topIndex = (z.topIndex+1)%z.tweets.length;
		}
	}
});
