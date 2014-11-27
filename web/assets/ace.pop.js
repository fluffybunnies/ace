/*

ace.pop({
	header: 'Are you sure?'
	,body: 'Clicking Ok will delete everything you own.'
	,btns: [
		['cancel','Cancel']
		,['ok','Ok']
	]
}).bind('ok',function(){
	// delete everything they own
});

*/


(function(){
	var Pop = AceBase.extend({
		init: function(opts){
			var z = this;
			if (typeof opts == 'string')
				opts = {body:opts};
			z.opts = $.extend({},z.config.defaults,opts);
			z.$ = {};
			z.build();
			z.functionalize();
			z.positionAndInsert();
		}
	});
	Pop.prototype.config = {
		key: 'pop'
		,defaults: {
			classes: ''
			,position: 'fixed'
			,true_center: false
			,exit_btn: true
			,btns: [
				['ok','Ok']
			]
			,header: ''
			,body: ''
		}
	}
	Pop.prototype.build = function(){
		var z = this
			,x = ace.cssKey(z)
			,exitBtn = false
		;

		if (z.opts.exit_btn)
			exitBtn = typeof(z.opts.exit_btn) == 'string' ? z.opts.exit_btn : 'X';

		z.$.cont = $('<div class="'+x+' '+z.opts.classes+'">'
			+ '<div class="'+x+'-head">'
				+ '<div class="'+x+'-head-content"></div>'
			+ '</div>'
			+ '<div class="'+x+'-body">'
				+ '<div class="'+x+'-body-content"></div>'
				+ '<div class="'+x+'-btns"></div>'
			+ '</div>'
			+ (exitBtn ? '<a class="'+x+'-btn '+x+'-btn-exit" xdata-key="exit" href="#">'+exitBtn+'</a>' : '')
		+ '</div>');
		z.$.head = z.$.cont.find('div.'+x+'-head-content');
		z.$.body = z.$.cont.find('div.'+x+'-body-content');
		z.$.btns = z.$.cont.find('div.'+x+'-btns');

		z.$.body.append(z.opts.body);
		z.$.head.append(z.opts.header);

		$.each(z.opts.btns,function(i,btn){
			var label,key;
			if (btn instanceof Array) {
				label = typeof(btn[1]) == 'string' ? btn[1] : btn[0];
				key = btn[0];
			} else {
				label = key = btn;
			}
			z.$.btns.append('<a class="'+x+'-btn '+x+'-btn-'+key+'" xdata-key="'+key+'" href="#">'+label+'</a>');
		});
	}
	Pop.prototype.functionalize = function(){
		var z = this
			,x = ace.cssKey(z)
		;
		z.$.cont.find('a.'+x+'-btn').bind('click',function(e){
			e.preventDefault();
			z.close($(this).attr('xdata-key'));
		});
	}
	Pop.prototype.positionAndInsert = function(){
		var z = this
			,$w = $(window)
			,$b = $(document.body)
			,scrollY = ace.util.getViewportScrollY()
			,x,y
		;

		z.$.cont.css({
			visibility: 'hidden'
			,position: z.opts.position == 'absolute' ? 'absolute' : 'fixed'
		});
		$b.append(z.$.cont);

		x = ($w.width()-z.$.cont.width()) / 2;
		y = ($w.height()-z.$.cont.height()) / 2;
		if (!z.opts.true_center) {
			if (y < 0)
				y = 0;
			if (x < 0)
				x = 0;
		}
		if (z.opts.position == 'absolute')
			y += scrollY;

		z.$.cont.css({
			left: x+'px',
			top: y+'px'
		});
		z.$.cont.css('visibility','');
	}
	Pop.prototype.close = function(key){
		var z = this;
		if (typeof key == 'string')
			z.trigger(key);
		z.trigger('close');
		z.$.cont.remove();
		z.trigger('removed');
	}

	ace.pop = function(opts){
		var id = ace.pop.getNextId()
			,pop = new Pop(opts)
		;
		pop.id = id;
		ace.pop.pops[id] = pop;
		++ace.pop.numOpen;
		pop.on('removed',function(){
			delete ace.pop.pops[id];
			if (--ace.pop.numOpen == 0)
				ace.pop.hideBg();
		});
		ace.pop.showBg();
		return pop;
	}
	ace.pop.config = {
		key: 'pop'
	};
	ace.pop.$ = {};
	ace.pop.pops = {};
	ace.pop.count = 0;
	ace.pop.numOpen = 0;
	ace.pop.getNextId = function(){
		return ace.pop.count++;
	}
	ace.pop.get = function(id){
		var z = this;
		return z.pops[id] ? z.pops[id] : null;
	}
	ace.pop.showBg = function(){
		var z = this
			,x = ace.cssKey(z)
		;
		if (z.$.bg)
			return;
		z.$.bg = $('<div class="'+x+'-bg"></div>');
		$('body').append(z.$.bg);
	}
	ace.pop.hideBg = function(){
		var z = this;
		if (!z.$.bg)
			return;
		z.$.bg.remove();
		delete z.$.bg;
	}

}());
