/*

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

*/

ace.ui.register('carousel',{
	opts: {
		imgs: []
		,dims: '195x148'
		,speed: 300
		,shadbox: true
	}
	,init: function(){
		var z = this
			,d = z.opts.dims.split('x')
		;
		z.slideQueue = [];
		z.imgWidth = +d[0];
		z.imgHeight = +d[1];

		if (!z.opts.imgs.length) {
			z.$.cont.css('display','none');
			return z.log('missing imgs');
		}

		z.build();
		z.calcDims();
		z.position();
		z.functionalize();
	}
	,build: function(){
		var z = this
			,x = z.cssKey
		;
		z.$.cont.html('<div class="'+x+'-mask">'
				+ '<div class="'+x+'-slide_cont"></div>'
			+ '</div>'
			+'<div class="'+x+'-arr '+x+'-arr-left" xdata-dir="-1" style="display:none;"></div>'
			+'<div class="'+x+'-arr '+x+'-arr-right" xdata-dir="1" style="display:none;"></div>'
		);
		z.$.mask = z.$.cont.find('div.'+x+'-mask');
		z.$.slidesCont = z.$.mask.find('div.'+x+'-slide_cont');
		z.$.arrows = z.$.cont.find('div.'+x+'-arr');
		z.$.slides = z.createSlide();
		z.$.slidesCont.append(z.$.slides);
	}
	,calcDims: function(){
		var z = this
			,x = z.cssKey
			,td = ace.util.trueDim(z.$.slides.eq(0).find('div.'+x+'-img').eq(0),true)
		;
		z.itemWidth = td.w;
		z.itemHeight = td.h;
		z.slideWidth = z.opts.imgs.length*z.itemWidth;
		z.maskWidth = z.$.mask.width();
		z.slideDistance = Math.floor(z.maskWidth/z.itemWidth)*z.itemWidth;
	}
	,createSlide: function(){
		var z = this
			,x = z.cssKey
			,jSlide
		;
		if (z.$.slides && z.$.slides.length)
			return z.$.slides.eq(0).clone(true);
		jSlide = $('<div class="'+x+'-slide" style="visibility:hidden;"></div>')
		$.each(z.opts.imgs,function(i,src){
			jSlide.append('<div class="'+x+'-img is-loading" style="width:'+z.imgWidth+'px;height:'+z.imgHeight+'px;">'
				+ '<div class="'+x+'-img-wrap">'
					+ '<img class="'+x+'-img-img" alt="" src="'+src+'" style="display:none;" />'
				+ '</div>'
			+ '</div>');
		});
		return jSlide;
	}
	,position: function(){
		var z = this
			,x = z.cssKey
			,jSlide
		;
		z.$.mask.css('height',z.itemHeight+'px');

		if (z.slideWidth > z.maskWidth) {
			// need arrow functionality
			z.$.slides.eq(0).css('left',0);
			z.$.slides = z.$.slides.add(jSlide=z.createSlide().css('left',(-z.slideWidth)+'px'));
			z.$.slidesCont.append(jSlide);
			z.$.slides = z.$.slides.add(jSlide=z.createSlide().css('left',z.slideWidth+'px'));
			z.$.slidesCont.append(jSlide);
			z.$.arrows.css('display','');
		}

		z.$.slides.each(function(i){
			z.$.slides.eq(i).find('div.'+x+'-img').each(function(n){
				$(this).css('left',(n*z.itemWidth)+'px').imagesLoaded(function(){
					var jImg = $(this)
						,jImgImg = jImg.find('img.'+x+'-img-img')
					;
					jImg.removeClass('is-loading');
					jImgImg.css(
						ace.util.getImageToWindowFit([z.imgWidth,z.imgHeight],[jImgImg[0].width,jImgImg[0].height]).css
					).css('display','');
				});
			});
		});

		z.$.slides.css('visibility','');
	}
	,functionalize: function(){
		var z = this
			,x = z.cssKey
		;

		z.$.arrows.bind('click',function(){
			z.slide(+$(this).attr('xdata-dir'));
		});

		if (z.opts.shadbox) {
			z.$.cont.addClass('shadbox_enabled');
			z.$.slides.find('img.'+x+'-img-img').bind('click',function(){
				ace.shadbox($(this).attr('src'));
			});
		}
	}
	,slide: function(dir){
		var z = this;

		//z.slideQueue.push(dir);
		// if they click a direction opposite of current animation lets clear the queue
		if (z.slideQueue[0] && z.slideQueue[0] != dir)
			z.slideQueue = [z.slideQueue[0],dir]
		else
			z.slideQueue.push(dir);

		if (z.slideQueue.length == 1)
			slide();

		function slide() {
			var dir = z.slideQueue[0];
			if (!dir)
				return;
			z.$.slidesCont.animate({
				left: (z.$.slidesCont.position().left-(dir*z.slideDistance))+'px'
			},{
				duration: z.opts.speed
				,complete: function(){
					var offsetX = z.$.slidesCont.position().left;
					z.$.slides.sort(function(a,b){
						return $(a).position().left-$(b).position().left;
					});
					// this wastes resources popping back and forth unnecessarily
					//	dont have time to fix atm
					if (z.$.slides.eq(0).position().left+offsetX + z.slideWidth < -z.slideDistance) {
						// push onto end
						z.$.slides.eq(0).css('left', (z.$.slides.eq(2).position().left+z.slideWidth)+'px');
					} else if (z.$.slides.eq(2).position().left+offsetX > z.maskWidth+z.slideDistance) {
						// pop into beginning
						z.$.slides.eq(2).css('left', (z.$.slides.eq(0).position().left-z.slideWidth)+'px');
					}
					z.slideQueue.shift();
					slide();
				}
			});
		}
	}
});
