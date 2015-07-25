/*
curl localhost:3000/test -v
curl localhost:3000/test/node_server_test.php -v
curl localhost:3000/assets/ace.js -v
*/
var cp = require('child_process')
,http = require('http')
,fs = require('fs')
,path = require('path')
;

http.createServer(function(req, res){
	var reqPath = __dirname+'/web'+req.url;
	if (reqPath.indexOf('/../') != -1)
		return error('nope');
	fs.stat(reqPath, function(err,stat){
		if (err && err.code != 'ENOENT')
			return error(err);
		if (stat && stat.isFile()) {
			if (path.extname(reqPath) == '.php') {
				spawn('/usr/bin/php', [reqPath], function(code, stderr, stdout){
					if (stderr)
						return error(stderr, code);
					res.end(stdout);
				});
			} else {
				fs.createReadStream(reqPath).pipe(res);
			}
			return console.log('file exists', reqPath);
		}
		reqPath = __dirname+'/web/index.php';
		spawn('/usr/bin/php', [reqPath], {env:{
			DOCUMENT_URI: req.url
		}}, function(code, stderr, stdout){
			if (code || stderr)
				return error(stderr, code);
			res.end(stdout);
		});
	});
	function error(msg, code){
		res.statusCode = 500;
		return res.end('['+(code||0)+'] '+msg);
	}
}).listen(3000)


function spawn(cmd,args,opts,cb){
	//return console.log(cmd+' "'+args.join('" "')+'"');
	if (typeof opts == 'function') {
		cb = opts;
		opts = {};
	}
	var z = this, exitCode ,errs = [] ,outs = [] ,c = 3
	,proc = cp.spawn(cmd,args,opts).on('exit',function(code){
		exitCode = code;
		done();
	});
	proc.stderr.on('data',function(data){
		errs.push(data);
	}).on('end',done);
	proc.stdout.on('data',function(data){
		outs.push(data);
	}).on('end',done);
	function done(){
		if (--c)
			return;
		var err = errs.length ? Buffer.concat(errs).toString() : ''
		,out = outs.length ? Buffer.concat(outs).toString() : ''
		;
		if (cb)
			cb(exitCode||false,err,out);
	}
	return proc;
}

