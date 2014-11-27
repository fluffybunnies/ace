/*

ace.shadbox('/some.image.jpg');

*/

ace.shadbox = function(src,opts,cb){
	var z = ace.shadbox
		,opts_ = $.extend({},typeof(opts)=='object'?opts:{},z.config.defaults)
		,cb_ = cb ? cb : (opts instanceof Function ? opts : null)
	;

	z.close();
	if (!z.$.cont)
		z.build();

	z.open(src,opts_,cb_);
};
ace.shadbox.config = {
	key: 'shadbox'
	,defaults: {
		viewport: {
			padding: {x:.05, y:.05}
		}
		,anim: {
			fadeSpeed: 100
			,delay: 300
			,contentExpandSpeed: 300
			,contentFadeInSpeed: 300
		}
	}
}
ace.shadbox.$ = {};
ace.shadbox.build = function(){
	console.log(this,this.prototype);
	var z = this
		,x = ace.cssKey(z)
	;
	z.$.cont = $('<div class="'+x+'" style="display:none;">'
		+ '<div class="'+x+'-bg"></div>'
		+ '<div class="'+x+'-content">'
			+ '<div class="'+x+'-content-item"></div>'
			+ '<a class="'+x+'-close" href="#"></a>'
		+ '</div>'
	+ '</div>');
	$('body').append(z.$.cont);
	z.$.bg = z.$.cont.find('div.'+x+'-bg');
	z.$.content = z.$.cont.find('div.'+x+'-content');
	z.$.contentItem = z.$.content.find('div.'+x+'-content-item');
	z.$.close = z.$.content.find('a.'+x+'-close');

	z.$.cont.bind('click',function(){
		z.close();
	});
	z.$.close.bind('click',function(e){
		e.preventDefault();
	});
}
ace.shadbox.open = function(src,opts,cb){
	var z = this
		,d = $(document)
		,w = $(window)
		,viewportWidth = w.width()
		,viewportHeight = w.height()
		,paddingX = viewportWidth*opts.viewport.padding.x
		,paddingY = viewportHeight*opts.viewport.padding.y
		,initialX = (viewportWidth-z.$.content.width())/2
		//,initialY = (viewportHeight-z.$.content.height())/2 + ace.util.getViewportScrollY()
		,initialY = (viewportHeight-z.$.content.height())/2
		,img
	;

	z.isOpening = true;
	z.$.content.addClass('loading').css({
		width: ''
		,height: ''
	});
	z.$.content.css({
		left: initialX+'px'
		,top: initialY+'px'
	});
	z.$.cont.css({
		width: d.width()+'px'
		,height: d.height()+'px'
	}).fadeIn(opts.anim.fadeSpeed);
	img = new Image;
	$(img).bind('load',function(){
		var viewWidth = viewportWidth-paddingX
			,viewHeight = viewportHeight-paddingY
			,imgRatio,viewRatio,targetWidth,targetHeight,targetX,targetY
		;
		if (img.width > viewWidth || img.height > viewHeight) {
			imgRatio = img.width/img.height;
			viewRatio = viewWidth/viewHeight;
			if (viewRatio < imgRatio) {
				targetWidth = viewWidth;
				targetHeight = targetWidth/imgRatio;
			} else {
				targetHeight = viewHeight;
				targetWidth = targetHeight*imgRatio;
			}
		} else {
			targetWidth = img.width;
			targetHeight = img.height;
		}
		targetX = (viewportWidth-targetWidth)/2;
		//targetY = (viewportHeight-targetHeight)/2 + ace.util.getViewportScrollY();
		targetY = (viewportHeight-targetHeight)/2;
		jImg = $('<img src="'+src+'" alt="" />').fadeTo(0,0);
		z.$.contentItem.append(jImg);
		z.$.content.delay(opts.anim.delay).animate({
			width: targetWidth+'px'
			,height: targetHeight+'px'
			,left: targetX+'px'
			,top: targetY+'px'
		},{
			duration: opts.anim.contentExpandSpeed
			,complete: function(){
				z.$.content.removeClass('loading');
				jImg.fadeTo(opts.anim.contentFadeInSpeed,1,function(){
					z.isOpening = false;
					z.isOpen = true;
					if (cb)
						cb();
				});
			}
		});
	}).bind('error',function(){
		z.isOpening = false;
		z.isOpen = true;
		z.$.content.removeClass('loading').addClass('error').css({
			left: (viewportWidth-z.$.content.width())/2 + 'px'
			//,top: ((viewportHeight-z.$.content.height())/2 + ace.util.getViewportScrollY()) + 'px'
			,top: ((viewportHeight-z.$.content.height())/2) + 'px'
		});
		if (cb)
			cb();
	});
	img.src = src;
}
ace.shadbox.close = function(){
	var z = this;
	z.isOpen = z.isOpening = false;
	if (z.$.cont) {
		z.$.cont.css('display','none');
		z.$.content.removeClass('error loading').css({
			width: ''
			,height: ''
			,left: ''
			,top: ''
		});
		z.$.contentItem.empty();
	}
}
