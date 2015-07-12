
/*
	Notes
		- Keeps querystrings but removes hashes
		- Can force https but does not treat this as a new resource
		- Cb still called if css fails to load


-- SIMPLE --
ace.resource.fetch('https://s3.example.com/assets/SNotifs.js');

-- WITH CALLBACK --
ace.resource.fetch('https://s3.example.com/assets/SNotifs.js',function(){
	console.log('js and css loaded');
});

-- MULTIPLE, CALLBACK FOR JS AND CSS SEPARATE --
ace.resource.fetch([
	'//s3.example.com/assets/SNotifs.js#sup'
	,'//s3.example.com/assets/SActivity.pv2.js'
	,'//s3.example.com/assets/SLeaderboards.pv2.js'
	,'s3.example.com/assets/SNotifs.css'
	,'s3.example.com/assets/SActivity.pv2.css'
	,'s3.example.com/assets/SLeaderboards.pv2.css'
],function(){
	console.log('jsdone2');
},function(){
	console.log('cssdone2');
});

-- MULTIPLE, CALLBACK FOR JS ONLY --
ace.resource.fetch([
	'//s3.example.com/assets/SActivity.pv2.js'
	,'s3.example.com/assets/SActivity.pv2.css'
],true,function(){
	console.log('jsdone3');
},new Function); // currently you need to pass the css cb as an empty function to split up the cbs

-- LOAD JS SERIALLY (use case: homepages with global namespace functions) --
ace.resource.fetch([
	'https://s3.example.com/assets/SNotifs.js'
	,'//s3.example.com/assets/SActivity.pv2.js'
],true,function(){
	console.log('alldone');
});

-- OVERRIDE AUTO-DETECT FILETYPE --
ace.resource.fetch([
	{
		url: '//start.jewelmint.com/k/api/test/temp'
		,type: 'js'
	}
	,'//s3.example.com/assets/SActivity.pv2.js'
],function(){
	console.log('alldone');
});

-- LOAD PACKS --
ace.resource.fetch([
	'pack:notifs'
	,'pack:activity'
]);

*/

ace.resource = {
	config: {
		key: 'resource'
		,versions: {
			// if asset is not listed here, it is versioned with defaultVersion via ace.getAppVersion()
			// setting explicit version here is better for caching, especially if you release often
			/* examples...
			's3.example.com/assets/SActivity.js': [3, 'activity'] // <-- 'activity' == pack key
			,'s3.example.com/assets/SActivity.css': [3, 'activity'] // <-- 'activity' == pack key
			,'s3.example.com/assets/SMysteryWheel.pv2.js': 3 // <-- 3 == version
			,'s3.example.com/assets/Polls.js': 5
			,'s3.example.com/assets/reviews.css': 20
			*/
		}
		,maxWaitCss: 1500
		,styleSheetsCheckInterval: 300
	}
	,resources: {}
	,packs: null
	,defaultVersion: null
	,fetch: function(/*resources,serial,opts,cb,jsCb,cssCb*/){
		var z = this
			,resources = arguments[0]
			,cbs = []
			,serial = false
			,opts = {}
			,n = 0
			,cb,jsCb,cssCb,undef,i
		;
		cb = jsCb = cssCb = function(){};
		for (i=1;i<arguments.length;++i) {
			switch (typeof arguments[i]) {
				case 'function': cbs.push(arguments[i]); break;
				case 'boolean': serial = arguments[i]; break;
				case 'object': opts = arguments[i]; break;
			}
		}
		if (cbs.length == 2) {
			jsCb = cbs[0];
			cssCb = cbs[1];
		} else if (cbs[0]) {
			cb = cbs[0];
		}

		ace.ready(function(){
			if (z.packs === null)
				z.buildPacks();
			if (z.defaultVersion === null)
				return ace.getAppVersion(function(err,appVersion){
					z.defaultVersion = appVersion;
					goGetEm();
				});
			goGetEm();
		});

		function goGetEm(){
      resources = z.parseResources(resources);
      //console.log('resources',resources);
      z.fetchCss(resources.css,opts.maxWaitCss==undef?z.config.maxWaitCss:opts.maxWaitCss,function(){
        setTimeout(function(){
          cssCb();
          if (++n == 2)
            cb();
        },0);
      });
      z.fetchJs(resources.js,serial,function(){
        setTimeout(function(){
          jsCb();
          if (++n == 2)
            cb();
        },0);
      });
		}
	}
	,fetchJs: function(items,serial,cb){
		var z = this
			,i = 0
			,n = 0
		;
		if (!items.length)
			return cb();

		if (serial) {
			(function next(){
				fetchItem(items[i++],function(){
					if (++n == items.length)
						return cb();
					next();
				});
			}());
		} else {
			$.each(items,function(i,item){
				fetchItem(item,function(){
					if (++n == items.length)
						cb();
				});
			});
		}

		function fetchItem(item,cb){
			var r = z.getResource(item.key);
			if (r.status == 'fetched')
				return cb();
			if (r.status == 'fetching')
				return z.subscribe(r,cb);
			r.status = 'fetching';
			$.ajax({
				dataType: 'script'
				,cache: true
				,url: item.url
				,success: function(){
					cb();
					z.gotResource(r);
				}
			});
		}
	}
	,fetchCss: function(items,maxWait,cb){
		var z = this
			,n = 0
		;
		if (!items.length)
			return cb();
		$.each(items,function(i,item){
			z.fetchSingleCss(item,maxWait,function(){
				if (++n == items.length)
					cb();
			});
		});
	}
	,fetchSingleCss: function(item,maxWait,cb){
		var z = this
			,r = z.getResource(item.key)
			,once = false
			,interval = null
			,$head = z.$head = z.$head || $('head')
			,lUrl = item.url.replace(/^https?:/,'')
			,done = function(){
				if (!once) {
					once = true;
					//if (typeof arguments[0] != 'undefined') // why did i write this? what if maxWait is null?
						z.gotResource(r);
					cb();
				}
				if (interval !== null) {
					clearInterval(interval);
					interval = null;
				}
			}
		;

		if (r.status == 'fetched')
			return done();
		if (r.status == 'fetching')
			return z.subscribe(r,done);
		r.status = 'fetching';
		$('<link>').bind('load',done).bind('error',done).appendTo($head).attr({type:'text/css',rel:'stylesheet'}).attr('href',item.url);

		if (document.styleSheets) {
			interval = setInterval(function(){
				$.each(document.styleSheets,function(i,v){
					if ((v.href||'').replace(/^https?:/,'') == lUrl)
						return done();
				});
			},z.config.styleSheetsCheckInterval);
		}

		if (typeof maxWait == 'number')
			setTimeout(function(){done(true);},maxWait);
	}
	,getResource: function(key){
		if (!this.resources[key])
			this.resources[key] = {key:key};
		return this.resources[key];
	}
	,subscribe: function(resource,cb){
		(resource.subs = resource.subs || []).push(cb);
	}
	,gotResource: function(resource){
		resource.status = 'fetched';
		if (resource.subs) {
			$.each(resource.subs,function(i,cb){
				cb();
			});
			delete resource.subs;
		}
	}
	,parseResources: function(input){
		var z = this
		,_input = []
		,resources = {
			js: []
			,css: []
		};
		input = input instanceof Array ? input : [input];
		$.each(input,function(i,item){
			var pkey;
			if (typeof item == 'string' && item.indexOf('pack:') == 0) {
				pkey = item.substr(5);
				if (z.packs[pkey])
					_input.push.apply(_input,z.packs[pkey]);
			} else {
				_input.push(item);
			}
		});
		$.each(_input,function(i,item){
			var type,url,key;
			if (item instanceof Object) {
				url = z.cleanUrl(item.url);
				type = item.type;
			} else {
				url = z.cleanUrl(item);
				type = z.fileType(item);
			}
			key = z.getKeyFromUrl(url);
			resources[type].push({
				key: key
				,url: url+(url.indexOf('?')<0?'?':'&')+z.version(key)
			});
		});
		return resources;
	}
	,cleanUrl: function(url){
		url = url.replace(/(#.*)/,'');
		if (!/^((https?:)?\/\/)/.test(url))
			url = '//'+url;
		return url;
	}
	,fileType: function(fn){
		// default to js to trigger errors
		return fn.toLowerCase().replace(/(\?.*)/,'').split('.').pop() == 'css' ? 'css' : 'js';
	}
	,getKeyFromUrl: function(url){
		return url.replace(/^(https?:)?\/\//i,'');
	}
	,version: function(resource){
		var v = this.config.versions[resource];
		if (v instanceof Array)
			v = v[0];
		return v == null ? z.defaultVersion : v;
	}
	,buildPacks: function(){
		var z = this;
		z.packs = {};
		$.each(z.config.versions,function(key,ver){
			if (!(ver instanceof Array))
				return true;
			var i,pkey;
			for (i=1;i<ver.length;++i) {
				pkey = ver[i];
				if (!z.packs[pkey])
					z.packs[pkey] = [];
				z.packs[pkey].push(key);
			}
		});
		
	}
};
//ace.resource.init();
