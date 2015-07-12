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
			// BEGIN handle jquery not returning responseJSON
			if (res && !res.responseJSON && res.responseText) {
				try {
					res.responseJSON = JSON.parse(res.responseText);
				} catch (e){}
			}
			// END handle jquery not returning responseJSON
			if (!(res && typeof res.responseJSON == 'object'))
				return cb({error:'unexpected response from api', code:0});
			if (typeof res.responseJSON.code != 'undefined')
				return cb(res.responseJSON);
			cb(false, res.responseJSON.data);
		}
	});
};
ace.req.config = {
	apiPrefix: '/ace/api/'
};
