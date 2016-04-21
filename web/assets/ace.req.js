/*

*/

ace.req = function(/* method must come after url */){
	var z = ace.req, method = 'get'
		,url,data,opts,showLoader,cb,i
	for (i=0;i<arguments.length;++i) {
		switch (typeof arguments[i]) {
			case 'string': url ? method = arguments[i] : url = arguments[i]; break;
			case 'object': data ? opts = arguments[i] : data = arguments[i]; break;
			case 'function': cb = arguments[i]; break;
			case 'boolean': showLoader = arguments[i]; break;
		}
	}
	url = z.config.apiPrefix + (url[0] == '/' ? url.substr(1) : url);
	showLoader && ace.loader.up();
	$.ajax({
		url: url
		,data: data
		,method: method // jQuery v1
		,type: method // jQuery v2
		,dataType: 'json'
		,complete: function(res){
			var undef;
			showLoader && ace.loader.down();
			// BEGIN handle jquery not returning responseJSON (wrong content-type or not an object)
			if (res && !res.responseJSON && res.responseText) {
				try {
					res.responseJSON = JSON.parse(res.responseText);
				} catch (e){}
			}
			// END handle jquery not returning responseJSON (wrong content-type or not an object)
			if (!(res && res.responseJSON))
				return cb({error:'unexpected response from api', code:0});
			if (res.responseJSON.code !== undef || res.responseJSON.error !== undef) {
				if (!res.responseJSON.code)
					res.responseJSON.code = -1;
				if (typeof res.responseJSON.error == 'object')
					res.responseJSON.error = JSON.stringify(res.responseJSON.error);
				return cb(res.responseJSON);
			}
			cb(false, res.responseJSON);
		}
	});
};
ace.req.config = {
	apiPrefix: '/ace/api/'
};

