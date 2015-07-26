/*

*/

ace.req = function(/* method must come after url */){
	var z = ace.req
		,method = 'get'
		,url,data,opts,cb,i,c
	for (i=0,c=arguments.length;i<c;++i) {
		switch (typeof(arguments[i])) {
			case 'string':
				if (!url)
					url = arguments[i];
				else
					method = arguments[i];
			break;
			case 'object':
				if (!data)
					data = arguments[i];
				else
					opts = arguments[i];
			break;
			case 'function':
				cb = arguments[i];
			break;
		}
	}
	if (url[0] == '/')
		url = url.substr(1);
	url = z.config.apiPrefix+url;
	$.ajax({
		url: url
		,data: data
		,method: method
		,dataType: 'json'
		,complete: function(res){
			var undef;
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

