/*

*/

ace.highlight = function($elm,opts,cb) {
	opts = $.extend({
		start: 'ffff00',
		duration: 1000,
		framerate: $.fx.interval
	},opts || {});

	var move_by_perc = opts.framerate/opts.duration,
		start = opts.start,
		frame = 0,
		last_frame = opts.duration/opts.framerate,
		interval,
		v,i,c;
	opts.start = [];
	i = 0;
	while ((v = start.substr(i*2,2)) !== '') {
		opts.start[i++] = parseInt(v,16);
	}

	$elm.each(function(){
		var jp = $(this),
			o = {
				current: [],
				key: 'rgb'
			};
		for (i=0,c=opts.start.length;i<c;i++) o.current[i] = +opts.start[i];
		/**
			Note: can't remember why i tested for 'rgba(0,0,0,0)'. seems like there
				is probably faulty logic here
		**/
		if ((o.end = $(this).css('background-color')).indexOf('rgb') != -1 && o.end.replace(/ /g,'').indexOf('rgba(0,0,0,0)') == -1) {
			o.end = o.end.replace('rgba(','').replace('rgb(','').replace(/ /g,'').replace(')','').split(',');
			for (i=0,c=o.end.length;i<c;i++) o.end[i] = +o.end[i];
			if (o.end.length > 3) {
				o.key = 'rgba';
				if (o.current.length == 3) o.current[3] = 1;
			}
		} else {
			o.end = [o.current[0],o.current[1],o.current[2],0];
			if (o.current.length < 4) o.current[3] = 1;
			o.key = 'rgba';
		}

		o.move_by = [];
		for (i=0,c=o.end.length;i<c;i++) o.move_by[i] = move_by_perc * (o.end[i] - o.current[i]);

		this.highlightBG_opts = o;
	});

	(function next(){
		if (++frame > last_frame) {
			$elm.each(function(){
				var o = this.highlightBG_opts;
				$(this).css('background-color',o.key+'('+o.end.join(',')+')');
			});
			if (cb) cb();
			return;
		}
		$elm.each(function(){
			var o = this.highlightBG_opts;
			for (i=0;i<3;i++) o.current[i] = Math.round(o.current[i]+o.move_by[i]);
			if (o.current.length > 3) o.current[3] = o.current[3]+o.move_by[3];
			$(this).css('background-color',o.key+'('+o.current.join(',')+')');
		});
		setTimeout(next,opts.framerate);
	}());

	return $elm;
}