/*

ace.tooltip($('#look-at-me'),{
	content: 'I do cool things!'
});

*/

(function(){
	function Tooltip($el,opts){
		var z = this;
		z.opts = $.extend(true,{},z.config.defaults,opts);
		z.id = z.s.count++;
		z.tooltips[z.id] = z;
		z.open = false;
		z.$ = {
			target: $el
		};
		if (z.opts.group)
			z.groups[z.opts.group] ? z.groups[z.opts.group].push(z) : (z.groups[z.opts.group] = [z]);
		if (ace.util.onTouchDevice())
			return console.log(z.config.key,'disabled for touch devices');
		$el.bind('mouseover mouseout',function(e){
			if (e.type == 'mouseover') {
				z.hideAll(z);
				if (z.opts.group !== null) {
					$.each(z.groups[z.opts.group],function(k,tip){
						tip.show();
					});
				} else
					z.show();
			} else {
				if (z.opts.group !== null) {
					$.each(z.groups[z.opts.group],function(k,tip){
						tip.hide();
					});
				} else
					z.hide();
			}
		});
	};
	Tooltip.prototype.config = {
		key: 'tooltip'
		,defaults: {
			content: ''
			,offset: null // null = width of arrow
			,pos: 'top' // top bot left right
			,fixed: false
			,group: null // tips with the same group will show/hide at the same time
			,classes: ''
		}
	}
	Tooltip.prototype.tooltips = {};
	Tooltip.prototype.groups = {};
	Tooltip.prototype.s = {
		count: 0
	}
	Tooltip.prototype.build = function(){
		var z = this
			,x = ace.cssKey(z)
			,posType = z.opts.fixed ? 'fixed' : 'absolute'
		;
		if (z.built)
			return false;
		z.built = true;
		z.$.cont = $('<div class="'+x+' pos-'+z.opts.pos+' '+z.opts.classes+'" style="position:'+posType+';">'
			+ '<div class="'+x+'-content">'+z.opts.content+'</div>'
			+ '<div class="'+x+'-arrow" style="position:absolute;"></div>'
		+ '</div>');
		z.$.arrow = z.$.cont.find('div.'+x+'-arrow');
		return true;
	}
	Tooltip.prototype.show = function(){
		var z = this;
		if (z.open)
			return;
		z.open = true;
		z.build();
		z.$.cont.css('visibility','hidden');
		$('body').append(z.$.cont);
		z.position();
		z.$.cont.css('visibility','');
	}
	Tooltip.prototype.hide = function(){
		var z = this;
		if (!z.open || !z.built)
			return;
		z.open = false;
		z.$.cont.remove();
	}
	Tooltip.prototype.hideAll = function(except){
		var z = this;
		$.each(z.tooltips,function(k,tooltip){
			if (tooltip != except && !(except && except.opts.group !== null && except.opts.group == tooltip.opts.group))
				tooltip.hide();
		});
	}
	Tooltip.prototype.position = function(){
		var z = this
			,$w = $(window)
			,tipDims = ace.util.trueDim(z.$.cont)
			,arrowDims = ace.util.trueDim(z.$.arrow)
			,targetDims = ace.util.trueDim(z.$.target)
			,targetOffset = z.$.target.offset()
			,windowWidth = $w.width()
			,windowHeight = $w.height()
			,offset = z.opts.offset
			,x,y,arrowX,arrowY
		;

		if (offset === null) {
			if (z.opts.pos == 'top' || z.opts.pos == 'bot')
				offset = arrowDims.h;
			else
				offset = arrowDims.w;
		}

		if (z.opts.pos == 'top') {
			x = targetOffset.left + (targetDims.w-tipDims.w)/2;
			y = targetOffset.top - tipDims.h - offset;
		} else if (z.opts.pos == 'bot') {
			x = targetOffset.left + (targetDims.w-tipDims.w)/2;
			y = targetOffset.top + targetDims.h + offset;
		} else if (z.opts.pos == 'left') {
			x = targetOffset.left - tipDims.w - offset;
			y = targetOffset.top + (targetDims.h-tipDims.h)/2;
		} else {
			x = targetOffset.left + targetDims.w + offset;
			y = targetOffset.top + (targetDims.h-tipDims.h)/2;
		}

		if (z.opts.fixed)
			y -= ace.util.getViewportScrollY();

		// keep within window
		if (x < 0)
			x = 0;
		else if (x+tipDims.w > windowWidth)
			x = windowWidth - tipDims.w;
		if (y < 0)
			y = 0;
		else if (y+tipDims.h > windowHeight)
			y = windowHeight - tipDims.h;

		if (z.opts.pos == 'top') {
			arrowX = targetOffset.left + (targetDims.w-arrowDims.w)/2 - x;
			arrowY = tipDims.h;
		} else if (z.opts.pos == 'bot') {
			arrowX = targetOffset.left + (targetDims.w-arrowDims.w)/2 - x;
			arrowY = 0 - arrowDims.h;
		} else if (z.opts.pos == 'left') {
			arrowX = tipDims.w;
			arrowY = targetOffset.top + (targetDims.h-arrowDims.h)/2 - y;
		} else {
			arrowX = 0 - arrowDims.w;
			arrowY = targetOffset.top + (targetDims.h-arrowDims.h)/2 - y;
		}

		z.$.cont.css({
			left: x+'px'
			,top: y+'px'
		});
		z.$.arrow.css({
			left: arrowX+'px'
			,top: arrowY+'px'
		});
	}

	ace.tooltip = function($el,opts){
		return new Tooltip($el,opts);
	}
	ace.tooltip.hideAll = function(except){
		Tooltip.prototype.hideAll(except);
	}
	ace.tooltip.get = function(id){
		return Tooltip.prototype.tooltips[id] ? Tooltip.prototype.tooltips[id] : null;
	}

}());