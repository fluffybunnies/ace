/*

<script type="text/ace-instagram">{
	query: 'users/227962011/media/recent'
}</script>

*/

ace.ui.register('instagram',{
	opts: {
		clientId: 'a26e3cd4b7b24a50857f54f78f051b63'
		,url: 'https://api.instagram.com/v1/'
		,type: 'squares med'
		,num: 10
		,hoverFadeIn: true
		,shadbox: true
	}
	,init: function(){
		var z = this;
		z.getData(function(){
			z.build();
			z.functionalize();
		});
	}
	,getData: function(cb){
		var z = this;
		$.getJSON(z.opts.url+z.opts.query+'?callback=?',{
			client_id: z.opts.clientId
			,count: z.opts.num
		},function(data){
			if (!(data && data.data))
				return z.log('api error');
			z.media = data.data;
			cb();
		});
	}
	,build: function(){
		var z = this
			,x = z.cssKey
		;
		$.each(z.opts.type.split(' '),function(i,t){
			z.$.cont.addClass('type-'+t);
		});
		$.each(z.media,function(i,m){
			var jImg = $('<div class="'+x+'-img">'
				+ '<img class="'+x+'-img-img" src="'+m.images.low_resolution.url+'" xdata-img="'+m.images.standard_resolution.url+'" />'
			+ '</div>');
			jImg.find('img.'+x+'-img-img').attr('alt',m.caption.text);
			z.$.cont.append(jImg);
		});
		z.$.cont.append('<div class="clear">&nbsp;</div>');

		z.$.imgs = z.$.cont.find('div.'+x+'-img');
	}
	,functionalize: function(){
		var z = this
			,x = z.cssKey
		;

		if (z.opts.hoverFadeIn) {
			z.$.imgs.fadeTo(0,.5);
			z.$.imgs.bind('mouseover mouseout',function(e){
				var t = $(this);
				if (e.type == 'mouseover')
					t.stop().fadeTo(200,1);
				else
					t.stop().fadeTo(200,.5);
			});
		}

		if (z.opts.shadbox) {
			z.$.cont.addClass('shadbox_enabled');
			z.$.cont.find('img.'+x+'-img-img').bind('click',function(){
				ace.shadbox($(this).attr('xdata-img'));
			});
		}
	}
});
