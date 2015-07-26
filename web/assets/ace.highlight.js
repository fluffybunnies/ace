/*
var $rowIJustUpdated = $('table tr.num-15');
ace.highlight($rowIJustUpdated).find('td.info').html(newValue);

$('body').addClass('flashMeGreen');
ace.highlight($('.flashMeGreen'), {start:'00ff00'})

To Do
	- Consider using CSS3 transitions instead
*/

ace.highlight = function($elm, opts, cb) {
	if (typeof opts == 'function') {
		cb = opts;
		opts = {};
	}
	opts = $.extend({
		start: 'ffff00'
		,duration: 1000
		,framerate: $.fx.interval
	},opts);

	var moveByPerc = opts.framerate/opts.duration
		,start = []
		,frame = 0
		,lastFrame = opts.duration/opts.framerate
		,elmOpts = []
		,i = 0, v
	;
	while ((v = opts.start.substr(i*2,2)) !== '')
		start[i++] = parseInt(v,16);

	$elm.each(function(){
		var o = {
			key: 'rgb'
			,current: []
			,moveBy: []
			,$elm: $(this)
		}, i
		for (i=0;i<start.length;++i)
			o.current[i] = start[i];
		/**
			Note: can't remember why i tested for 'rgba(0,0,0,0)'. seems like there
				is probably faulty logic here
		**/
		o.end = o.$elm.css('background-color');
		if (o.end.indexOf('rgb') != -1 && o.end.replace(/ /g,'').indexOf('rgba(0,0,0,0)') == -1) {
			o.end = o.end.replace('rgba(','').replace('rgb(','').replace(/ /g,'').replace(')','').split(',');
			for (i=0;i<o.end.length;++i)
				o.end[i] = +o.end[i];
			if (o.end.length > 3) {
				o.key = 'rgba';
				if (o.current.length == 3)
					o.current[3] = 1;
			}
		} else {
			o.end = [o.current[0],o.current[1],o.current[2],0];
			if (o.current.length < 4)
				o.current[3] = 1;
			o.key = 'rgba';
		}

		for (i=0;i<o.end.length;++i)
			o.moveBy[i] = moveByPerc * (o.end[i] - o.current[i]);

		elmOpts.push(o);
	});

	(function next(){
		if (++frame > lastFrame) {
			$.each(elmOpts,function(i,o){
				o.$elm.css('background-color',o.key+'('+o.end.join(',')+')');
			});
			if (cb) cb();
			return;
		}
		$.each(elmOpts,function(i,o){
			for (i=0;i<3;++i)
				o.current[i] = Math.round(o.current[i]+o.moveBy[i]);
			if (o.current.length > 3)
				o.current[3] = o.current[3]+o.moveBy[3];
			o.$elm.css('background-color',o.key+'('+o.current.join(',')+')');
		});
		setTimeout(next,opts.framerate);
	}());

	return $elm;
}
