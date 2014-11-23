
var fs = require('fs')
,csvStringify = require('csv-stringify')
,path = require('path')
,ut = require('./ut')
;

module.exports = function(key, keys, dir){
	var baseName = key+'.'+ut.fileTime(new Date)
	,s = {}
	;
	keys.forEach(function(k){
		var f = s[k] = {
			path: dir+baseName+'.'+k+'.csv'
			,write: function(data){
				var rows = []
				,input = []
				;
				if (!f.headers) {
					f.headers = Object.keys(data);
					//f.ws.write('"'+f.headers.join('","')+'"\n');
					rows.push(f.headers);
				}
				f.headers.forEach(function(k){
					input.push(data[k]);
				});
				rows.push(input);
				csvStringify(rows,function(err,csvString){
					if (err)
						return console.log('CSV STRINGIFY ERROR',err,data);
					f.ws.write(csvString);
				});
			}
		};
		f.ws = fs.createWriteStream(f.path);
	});
	/*s.close = function(){
		keys.forEach(function(k){
			s[k].ws.close();
		});
	};*/
	return s;
}

module.exports.printFileNames = function(s){
	Object.keys(s).forEach(function(k){
		console.log( path.basename(s[k].path) );
	});
}

