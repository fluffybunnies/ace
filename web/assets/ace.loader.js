/*
-- Concept --
ace.loader.up()
doSomethingAsync(function(){
	ace.loader.down()
})
ace.loader.up()
doSomethingElseAsync(function(){
	ace.loader.down()
})

-- Test --
ace.loader.up()
setTimeout(function(){
	ace.loader.down()
	console.log('1111')
},2000)
ace.loader.up()
setTimeout(function(){
	ace.loader.down()
	console.log('2222')
},4000)
*/

ace.loader = {
	config: {
		key: 'loader'
	}
	,$el: null
	,queue: 0
	,up: function(){
		if (++this.queue == 1)
			this._show();
	}
	,down: function(){
		if (this.queue == 0)
			return;
		if (--this.queue == 0)
			this._hide();
	}
	,_show: function(){
		var z = this
			,x = ace.cssKey(z)
		;
		if (!z.$el)
			z.$el = $('<div class="'+x+'" />').appendTo($('body'));
		z.$el.css('display','');
	}
	,_hide: function(){
		if (this.$el)
			this.$el.css('display','none');
	}
}

