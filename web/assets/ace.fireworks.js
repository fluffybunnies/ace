/*

// fire on demand...
ace.fireworks.fire();

// or, to shoot fireworks everytime you click on my name...
ace.fireworks.initializePage({
		zIndex: 11
		,length: 5000
		,numParts: Math.random()<0.5 ? 'happy_face' : undef
	}, function($el){
		var myName = 'alec hulce;
			,sext = $.trim($el.text()||$el.val()||'').toLowerCase()
		;
		if (sext == myName)
			return true;
		if ($el.children().length > 0)
			return false;
		return sext.indexOf(myName) != -1;
});

*/

ace.fireworks = {
	config: {
		key: 'fireworks'
	}

	,init: function(){
		var z = this;
		if (z._inited) return false;
		z._inited = true;

		return true;
	}

	,initializePage: function(opts, condition){
		var z = this;

		ace.ready(function(){
			$(function(){
				if (condition instanceof Function) {
					$('body').on('click','*',function(e){
						var $el = $(this);
						if (condition($el))
							z.fire(opts);
					});
				} else {
					$('body').on('click','.fireworks',function(e){
						e.preventDefault();
						z.fire(opts);
					});
				}
			});
		});
	}

	,fire: function(opts) {
		var jw = $(window)
			,w = jw.width()
			,h = jw.height()
			,url = '/assets/fireworks/fireworks.swf'
			,jf,undef
		;
		opts = opts || {};
		url += '?' + $.param({
			maxFires: 1
			,numParts: opts.numParts ? opts.numParts : undef
			,delay0: 1
			,delay1: 2
		});
		jf = $('<div></div>').css({
			position: 'fixed'
			,left: 0
			,top: 0
			,'z-index': opts.zIndex != undef ? opts.zIndex : -1
		});
		jf.append('<object width="'+w+'" height="'+h+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">'
			+ '<param name="wmode" value="transparent">'
			+ '<param value="'+url+'" name="movie" />'
			+ '<embed width="'+w+'" height="'+h+'" wmode="transparent" src="'+url+'" />'
		+ '</object>');
		$('body').append(jf);
		setTimeout(function(){
			jf.remove();
		},opts.length != undef ? opts.length : 15000);
	}

};
ace.fireworks.init();
