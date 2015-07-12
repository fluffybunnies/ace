
;(function(){
	var initializing = false;
	this.AceBase = function(){};
	AceBase.extend = function(o){
		initializing = true;
		var n = new this;
		initializing = false;
		for (var k in o)
			n[k] = o[k];
		n.super = this.prototype;
		function AceBase() {
			// #AB0
			if (!initializing && this.init instanceof Function)
				this.init.apply(this,arguments);

			/*
			// #AB1
			var z = this,args=arguments;
			if (!initializing && this.init instanceof Function) {
				setTimeout(function(){
					z.init.apply(z,args);
				},0);
			}
			*/
		}
		AceBase.prototype = n;
		AceBase.prototype.constructor = AceBase;
		AceBase.extend = arguments.callee;
		return AceBase;
	}
}());
AceBase.prototype.on = function(key,cb){
	var keys = key.split(/ +/), i;
	for (i=0;i<keys.length;++i)
		this._getEvt(keys[i]).subs.push({
			cb: cb
		});
	return this;
}
AceBase.prototype.ready = function(key,cb){
	var keys = key.split(/ +/), evt, i;
	for (i=0;i<keys.length;++i) {
		evt = this._getEvt(keys[i]);
		if (evt.firedOnce) {
			cb(evt.error,evt.data);
		} else {
			evt.subs.push({
				cb: cb,
				typeReady: true
			});
		}
	}
	return this;
}
AceBase.prototype.off = function(key,cb){
	var keys = key.split(/ +/)
		,i = 0, n = 0
		,evt, undef
	;
	for (;i<keys.length;++i) {
		if (!this._evts || !this._evts[keys[i]])
			continue;
		evt = this._getEvt(keys[i]);
		if (cb === undef) {
			evt.subs = [];
		} else {
			for (n=0;n<evt.subs.length;++n) {
				// checking !sub in case this is called in callback inside fireSubs
				if (!evt.subs[n] || evt.subs[n].cb == cb)
					evt.subs[n] = null;
			}
			ace.util.arrayFilter(evt.subs, function(sub){
				return sub !== null;
			});
		}
	}
	return this;
}
AceBase.prototype.trigger = function(key,error,data){
	var keys = key.split(/ +/), evt, i;
	for (i=0;i<keys.length;++i) {
		evt = this._getEvt(keys[i]);
		evt.firedOnce = true;
		evt.error = error;
		evt.data = data;
		this._fireSubs(keys[i]);
	}
	return this;
}
AceBase.prototype._getEvt = function(key){
	var undef;
	if (this._evts == undef)
		this._evts = {};
	if (this._evts[key] == undef) {
		this._evts[key] = {
			subs: []
		};
	}
	return this._evts[key];
}
AceBase.prototype._fireSubs = function(key){
	var evt = this._getEvt(key), subs = evt.subs.slice(0);
	for (i=0;i<subs.length;++i) {
		subs[i].cb(evt.error,evt.data);
	}
	for (i=0;i<evt.subs.length;++i) {
		if (evt.subs[i].typeReady)
			evt.subs[i] = null;
	}
	ace.util.arrayFilter(evt.subs,function(sub){
		return sub !== null;
	});
}
AceBase.prototype.log = function(){
	var args = [this.key||(this.config?this.config.key:null)||'anonymous AceBase'], i = 0;
	for (;i<arguments.length;++i)
		args.push(arguments[i]);
	console.log.apply(console,args);
}


ace = {

	config: {
		key: 'ace'
		,readyCheckDelay: 15
	}
	,_appVersion: null
	,_readyCbs: []
	,_ready: false

	,init: function(){
		var z = this;
		if (z.inited)
			return false;
		z.inited = true;

		(function checkReady(){
			if (!window.$)
				return setTimeout(checkReady,z.config.readyCheckDelay);
			z._jQExtensions();
			console.log('ace ready');
			z._ready = true;
			$.each(z._readyCbs,function(i,cb){
				if (cb instanceof Function)
					cb();
			});
			delete z._readyCbs;
			z.ui.checkForWidgets();
		}());
	}

	,getAppVersion: function(cb){
  	var z = this;
  	if (z._appVersion !== null)
  		return setTimeout(function(){
  			cb(false, z._appVersion);
  		},0);
  	z.bus.ready('appversion',cb);
  	if (z._getAppVersionCalledOnce)
  		return;
  	z._getAppVersionCalledOnce = true;
  	// modify this method to suit your package
  	// e.g. fetch current commit hash, or package.json version #
  	z.req('app/version',function(err, data){
  		if (err)
  			console.log(z.config.key, 'ERROR', 'failed to get app version', err);
  		else
  			z._appVersion = data.git_hash;
  		ace.bus.trigger('appversion',err,z._appVersion);
  	});
	}

	,ready: function(cb){
		if (this._ready)
			cb();
		else
			this._readyCbs.push(cb);
	}

	,cssKey: function(module){
		return this.config.key+'-'+(module.config.key||module.prototype.config.key);
	}

	,ui: {
		_modules: {}

		,register: function(key,proto){
			var z = this;
			if (z.getModule(key))
				return console.log(key+' already registered');
			ace.ready(function(){
				// #AB0
				var module = z._modules[key] = function(){
					AceBase.call(this);
				};
				module.prototype = new AceBase;
				module.prototype.constructor = module;
				$.extend(true,module.prototype,{
					init: function(){}
					,opts: {}
				},proto,{
					key: key
					,cssKey: 'ace-'+key
				});

				/*
				// #AB1
				var module = z._modules[key] = AceBase.extend(proto);
				module.prototype.key = key;
				module.prototype.cssKey = 'ace-'+key;
				*/

				module.instances = [];
				ace.bus.trigger(key+':registered');
			});
		}

		,getModule: function(key){
			return this._modules[key];
		}

		,moduleReady: function(moduleKey,cb){
			var z = this;
			ace.bus.ready(moduleKey+':registered',function(){
				ace.ready(cb);
				/* these are silly
				var module = z.getModule(moduleKey)
					,i = 0
					,deps
				;
				if (!(module.config && module.config.dependencies && module.config.dependencies instanceof Array && module.config.dependencies.length))
					return depsRdy();
				deps = module.config.dependencies;
				(function next(){
					ace.bus.ready(deps[i]+':registered',function(){
						if (++i == deps.length)
							return depsRdy();
						next();
					});
				}());
				function depsRdy(){
					ace.ready(cb);
				}
				*/
			});
		}

		,checkForWidgets: function(jCont){
			var z = this;
			$(function(){
				(jCont || $('body')).find('script[type^="text/ace-"]').each(function(){
					var $script = $(this)
						,key = $script.attr('type').replace('text/ace-','')
						,opts
					;
					try {
						opts = eval('('+$.trim($script[0].innerHTML)+')');
					} catch (e) {}
					if (typeof opts != 'object')
						opts = {};
					z.widgetize(key,$script,opts);
				});
			});
		}

		,widgetize: function(key,$cont,opts,cb){
			var z = this;
			z.moduleReady(key,function(){
				var $elm = $('<div class="ace-'+key+'"></div>')
					,module = z.getModule(key)
					,instance = new module()
				;
				$cont.replaceWith($elm);
				instance.opts = $.extend(true,{},module.prototype.opts,opts);
				instance.$ = {
					cont: $elm
				};
				module.instances.push(instance);

				// #AB0 (#AB1 == init commented out)
				instance.init();

				if (cb)
					cb.call(instance);
			});
		}

	}

	,bus: new AceBase

	,util: {
		strToClass: function(str){
			return (str+'').replace(/(^[^a-zA-Z]+)|([^a-zA-Z0-9_\-])/g,'');
		}

		,rand: function(min,max){
			return min+Math.round(Math.random()*(max-min));
		}

		,capitalize: function(str, isName){
			var words = str.split(' ')
				,i,c,f2,f3
			;
			for (i=0,c=words.length;i<c;++i) {
				if (words[i]) {
					words[i] = words[i].toLowerCase();
					words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
					if (isName) {
						// charAt faster than substr
						f2 = words[i].charAt(0)+words[i].charAt(1);
						if (f2 == 'Mc' || f2 == 'O\'')
							words[i] = f2+words[i][2].toUpperCase()+words[i].substr(3);
						else if ((f3 = f2+words[i].charAt(2)) == 'Mac')
							words[i] = f3+words[i][3].toUpperCase()+words[i].substr(4);
						if (words[i].indexOf('-') != -1)
							words[i] = this.capitalize(words[i].replace(/-/g,' '), true).replace(/ /g,'-');
					}
				}
			}
			return words.join(' ');
		}

		,escapeHtml: function(str,nl2br){
			str = $('<div>').text(str).html();
			if (nl2br)
				str = str.replace(/\n/g,'<br />')
			return str;
		}

		,escapeRegEx: function(str){
			// adds slashes to regex control chars
			return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		}

		,formatPlace: function(num){
			var numPos = Math.abs(num)
				,lastChar = (num+'').substr(-1)
				,suffix
			;
			if (num == 0) return '0th';
			if (numPos > 10 && numPos < 20) suffix = 'th';
			else if (lastChar == 1) suffix = 'st';
			else if (lastChar == 2) suffix = 'nd';
			else if (lastChar == 3) suffix = 'rd';
			else suffix = 'th';
			return num+suffix;
		}

		,formatInteger: function(num){ // #benched vs various regex, though some got close
			// format first number found with commas: formatInteger(1000) = '1,000'
			//	will accept already-formatted number, and even fix badly formatted input: formatInteger('$10,00.00') == '$1,000.00'
			var num = num+'', numNums = 0, numStart, i
			for (i=0;i<num.length;++i) {
				if (isNaN(num[i])) {
					if (num[i] == ',') num = num.substr(0,i)+num.substr(i--+1);
					else if (numNums) break;
				} else if (++numNums == 1)
					numStart = i;
			}
			if (numNums > 3) {
				var n;
				for (i=3;i<numNums;i=i+3) {
					n = numStart+numNums-i;
					num = num.slice(0,n)+','+num.slice(n);
				}
			}
			return num;
		}

		,formatTimeAgo: function(timestamp,now){
			if (typeof timestamp == 'string' && isNaN(timestamp))
				timestamp = new Date(timestamp);
			if (timestamp instanceof Date)
				timestamp = Math.round(+timestamp/1000);
			if (typeof now == 'string' && isNaN(now))
				now = new Date(now);
			if (now instanceof Date)
				now = +now;
			now = typeof now == 'undefined' ? Math.round(+new Date/1000) : now;
			var secs = now - timestamp
				,intervals = [
					['year',31536000]
					,['month',2628000]
					,['week',604800]
					,['day',86400]
					,['hour',3600]
					,['minute',60]
				],recent = 'just now'
				,secs,str
			;
			if (secs < 0)
				secs = 0;
			$.each(intervals,function(i,interval){
				var ago = Math.floor(secs/interval[1]);
				if (ago > 0) {
					str = ago+' '+interval[0]+(ago==1?'':'s')+' ago'
					return false;
				}
			});
			if (typeof str == 'undefined')
				str = recent;
			return str;
		}

		,getViewportScrollY: function(){
			return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		}

		,trueDim: function(jelm,includeMargin){
			var nre = /[^0-9\-.]/g
				,d = {
					w: jelm.width()
					,h: jelm.height()
				}
				,add,i,c
			;
			add = ['border-left-width','padding-left','padding-right','border-right-width'];
			if (includeMargin)
				add.push.call(add, 'margin-left', 'margin-right');
			for (i=0,c=add.length;i<c;++i)
				d.w += +(jelm.css(add[i])||'0').replace(nre,'');
			add = ['border-top-width','padding-top','padding-bottom','border-bottom-width'];
			if (includeMargin)
				add.push.call(add, 'margin-top', 'margin-bottom');
			for (i=0,c=add.length;i<c;++i)
				d.h += +(jelm.css(add[i])||'0').replace(nre,'');
			return d;
		}

		,arrayFilter: function(arr,cb,start){
			var i,c;
			start = typeof start == 'number' ? start : 0;
			for (i=start,c=arr.length;i<c;++i) {
				if (!cb(arr[i])) {
					arr.splice(i,1);
					this.arrayFilter(arr,cb,i);
					break;
				}
			}
			return arr;
		}

		,getImageToWindowFit: function(windowSize,imgSize,center){
			// Deprecated in favor of background-size:cover for most use cases
			/**
				ex:
					center = [null,50/100]
					center = [0.2,0.8]
			**/
			windowSize = [+windowSize[0],+windowSize[1]];
			imgSize = [+imgSize[0],+imgSize[1]];
			if (!center) center = [null,null];
			center = [center[0] === null ? null : +center[0],center[1] === null ? null : +center[1]];

			var windowW2H = windowSize[0]/windowSize[1]
				,imgW2H = imgSize[0]/imgSize[1]
				,offsetX = 0, offsetY = 0
				,newWidth,newHeight,fit
			;

			if (windowW2H > imgW2H) {
				newWidth = windowSize[0];
				newHeight = newWidth/imgW2H;
				if (newHeight < windowSize[1]) newHeight = windowSize[1];
				offsetY = -1 * (newHeight-windowSize[1])/2;
				if (center[1] !== null) offsetY += (.5-center[1])*newHeight;
				if (offsetY > 0) offsetY = 0;
				else if (offsetY < windowSize[1]-newHeight) offsetY = windowSize[1]-newHeight;
			} else {
				newHeight = windowSize[1];
				newWidth = newHeight*imgW2H;
				if (newWidth < windowSize[0]) newWidth = windowSize[0];
				offsetX = -1*(newWidth-windowSize[0])/2;
				if (center[0] !== null) offsetX += (.5-center[0])*newWidth;
				if (offsetX > 0) offsetX = 0;
				else if (offsetX < windowSize[0]-newWidth) offsetX = windowSize[0]-newWidth;
			}

			fit = {
				width: newWidth
				,height: newHeight
				,offset: {
					x: offsetX
					,y: offsetY
				}
			};
			fit.style = 'width:'+fit.width+'px;height:'+fit.height+'px;left:'+fit.offset.x+'px;top:'+fit.offset.y+'px;';
			fit.css = {
				width: fit.width+'px'
				,height: fit.height+'px'
				,left: fit.offset.x+'px'
				,top: fit.offset.y+'px'
			};
			return fit;
		}

		,isWithinViewport: function($elm){
			var scrollY = this.getViewportScrollY()
				,viewHeight = $(window).height()
				,elmY,elmHeight
			if (typeof $elm == 'number') {
				elmY = $elm
				elmHeight = 0
			} else {
				elmY = $elm.offset().top
				elmHeight = this.trueDim($elm).h
			}
			return !!((elmY > scrollY && elmY < scrollY+viewHeight) || (elmY+elmHeight > scrollY && elmY+elmHeight < scrollY+viewHeight))
		}
		,isFullyWithinViewport: function($elm){
			var y = $elm.offset().top
				,height = this.trueDim($elm).h
			return this.isWithinViewport(y) && this.isWithinViewport(y+height)
		}

		,onTouchDevice: function(){
			return 'ontouchstart' in document.documentElement;
		}

		,getParameterByName: function(name, url){
	    url = (url || window.location.href)
	    name = name.replace(/[\[]/, "\\\\[").replace(/[\]]/, "\\\\]");
	    var regexS = "[\\?&]" + name + "=([^&#]*)"
	    	,regex = new RegExp(regexS)
	    	,results = regex.exec(url)
	    ;
	    return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		,parseCookies: function(cookie){
			cookie = cookie || document.cookie;
			var cookies = cookie.split(';')
				,res = {}
			;
			$.each(cookies,function(i,v){
				var split = v.split('=')
					,key = unescape(split[0][0] == ' ' ? split[0].substr(1) : split[0])
					,val = unescape(split[1]||'')
				;
				if (key != '')
					res[key] = val;
			});
			return res;
		}
		,setCookie: function(key,val,opts){
			var undef,expires,set;
			if (typeof opts == 'number' || typeof opts == 'string') // allow 3rd argument to == expires
				opts = {expires:opts};
			opts = (opts && typeof opts == 'object') ? opts : {};
			if (val == undef)
				opts.expires = -1;
			if (typeof opts.expires == 'number') {
				expires = new Date;
				expires.setMilliseconds(expires.getMilliseconds()+opts.expires);
				expires = expires.toUTCString();
			} else if (typeof opts.expires == 'string') {
				expires = opts.expires;
			}
			set = (document.cookie = [
				escape(key),'=',escape(val)
				,expires == undef ? '' : '; expires='+expires
				,opts.path == undef ? '; path=/' : '; path='+opts.path
				,opts.domain == undef ? '' : '; domain='+opts.domain
				,opts.secure ? ';secure' : ''
			].join(''));
			return document.cookie = set;
		}
		,getCookie: function(key){
			return this.parseCookies()[key];
		}
		,deleteCookie: function(key){
			return this.setCookie(key, null);
		}

		,padZ: function(n,m){
			if (typeof m == 'undefined')
				m = 2;
			while ((n+'').length < m)
				n = '0'+n;
			return n;
		}

		,hash: function(str){
			// convert string to integer. one way
			var hash = 0, i, l;
			str += '';
			for (i=0,l=str.length;i<l;++i) {
				hash = (hash<<5)-hash+str.charCodeAt(i);
				hash |= 0;
			}
			return hash;
		}

		,obfu: function (str, salt){
			var bound = 5, boundLimit = Math.pow(10,bound), hash = '', i, l, charCode;
			str += '';
			for (i=0,l=str.length;i<l;++i) {
				charCode = str.charCodeAt(i);
				if (salt)
					charCode = (charCode + (salt+'').charCodeAt(i%salt.length))%boundLimit;
				charCode = padZ(charCode,bound);
				hash += charCode;
			}
			return hash;
		}
		,deobfu: function(hash, salt){
			var bound = 5, boundLimit = Math.pow(10,bound), str = '', chunk = '', n = 0, i, l;
			hash += '';
			for (i=0,l=hash.length;i<l;++i) {
				chunk += hash[i];
				if (chunk.length == bound) {
					if (salt)
						chunk = Math.abs( (chunk - (salt+'').charCodeAt(n%salt.length))%boundLimit );
					str += String.fromCharCode(chunk);
					chunk = '';
					++n;
				}
			}
			return str;
		}

	}

	,_jQExtensions: function(){
		$.fn.imagesLoaded = function(cb){
			var $elm = this
				,jimgs = this.find('img').andSelf().filter('img')
				,imgs = []
				,numLoaded = 0
				,numImgs,loaded
			;
			numImgs = jimgs.length;
			if (!numImgs)
				return done();
			loaded = function(index){
				if (!imgs[index]) {
					imgs[index] = true;
					if (++numLoaded == numImgs)
						done();
				}
			};
			jimgs.each(function(index){
				var doIt = function(){
					loaded(index);
				};
				imgs.push(false);
				if (this.complete) {
					doIt();
				} else {
					$(this).bind('load',doIt).bind('error',doIt);
					if (this.complete)
						doIt();
				}
			});
			function done(){
				if (cb) {
					setTimeout(function(){
						cb.call($elm);
					},0);
				}
			}
		}
		$.fn.widgetize = function(widgetName, opts){
			ace.ui.widgetize(widgetName, this, opts);
		}
	}

};
