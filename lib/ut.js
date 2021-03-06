var sext = require('sext')
,fs = require('fs')
,path = require('path')
,trimConsecutiveRe = /(\s)+/g
,undef
;


module.exports.spawn = function(cmd,args,cb){
	//return console.log(cmd+' "'+args.join('" "')+'"')
	var exitCode ,errs = [] ,outs = [] ,c = 3
	,proc = require('child_process').spawn(cmd,args).on('exit',function(code){
		exitCode = code
		done()
	})
	proc.stderr.on('data',function(data){
		errs.push(data)
	}).on('end',done)
	proc.stdout.on('data',function(data){
		outs.push(data)
	}).on('end',done)
	function done(){
		if (--c) return
		var stderr = errs.length ? Buffer.concat(errs).toString() : ''
			,stdout = outs.length ? Buffer.concat(outs).toString() : ''
		cb && cb(exitCode||false,stdout,stderr)
		cb = null
	}
	return proc
}

module.exports.fileTime =  function(date,utc){
	var z = this, d = date ? date : new Date
	if (utc)
		return d.getUTCFullYear()+'-'+z.padZ(d.getUTCMonth()+1)+'-'+z.padZ(d.getUTCDate())+'_'+z.padZ(d.getUTCHours())+z.padZ(d.getUTCMinutes())+z.padZ(d.getUTCSeconds())+'UTC'
	return d.getFullYear()+'-'+z.padZ(d.getMonth()+1)+'-'+z.padZ(d.getDate())+'_'+z.padZ(d.getHours())+z.padZ(d.getMinutes())+z.padZ(d.getSeconds())
}

module.exports.prettyTime = function(date,utc){
	var z = this, d = date ? date : new Date
	if (utc)
		return z.padZ(d.getUTCMonth()+1)+'/'+z.padZ(d.getUTCDate())+'/'+d.getUTCFullYear()+' '+z.padZ(d.getUTCHours())+':'+z.padZ(d.getUTCMinutes())+':'+z.padZ(d.getUTCSeconds())+' UTC'
	return z.padZ(d.getMonth()+1)+'/'+z.padZ(d.getDate())+'/'+d.getFullYear()+' '+z.padZ(d.getHours())+':'+z.padZ(d.getMinutes())+':'+z.padZ(d.getSeconds())
}

module.exports.dbTime = function(date, utc){
	var z = this, d = date ? date : new Date
	if (utc)
		return d.getUTCFullYear()+'-'+z.padZ(d.getUTCMonth()+1)+'-'+z.padZ(d.getUTCDate())+' '+z.padZ(d.getUTCHours())+':'+z.padZ(d.getUTCMinutes())+':'+z.padZ(d.getUTCSeconds())
	return d.getFullYear()+'-'+z.padZ(d.getMonth()+1)+'-'+z.padZ(d.getDate())+' '+z.padZ(d.getHours())+':'+z.padZ(d.getMinutes())+':'+z.padZ(d.getSeconds())
}

module.exports.padZ = function(n, m){
	if (m == undef)
		m = 2
	while ((n+'').length < m)
		n = '0'+n
	return n
}

module.exports.isNumeric = function(){
	for (var i=0;i<arguments.length;++i)
		if (!isNumeric(arguments[i]))
			return false
	return true
}
function isNumeric(n){
	return !isNaN(parseFloat(n)) && isFinite(n)
}

module.exports.getFirstChild = function(o){
	for (var k in o)
		return o[k]
}

module.exports.getFirstKey = function(o){
	for (var k in o)
		return k
}

module.exports.rand = function(min,max){
	if (Array.isArray(min)) {
		max = min[1]
		min = min[0]
	}
	return min+Math.round(Math.random()*(max-min));
}

module.exports.replaceAll = function(str,search,replace){
	return str.split(search).join(replace)
}

module.exports.trim = function(str){
	return str.trim()
}

module.exports.superTrim = function(str){
	return this.trim(str).replace(trimConsecutiveRe,' ')
}

// similar to php's array_flip
// if optional useChildKeyInstead is passed, values stay in place and keys are overwritten
module.exports.flipObjKeyVals = function(obj,useChildKeyInstead,newVal){
	var newObj = {}, key
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (useChildKeyInstead)
				newObj[obj[key][useChildKeyInstead]] = typeof newVal == 'undefined' ? obj[key] : newVal
			else
				newObj[obj[key]] = key
		}
	}
	return newObj
}

module.exports.pluckFromArray = function(array,key,value,fromIndex){
	if (Array.isArray(array)) {
		for (var i=fromIndex||0;i<array.length;++i) {
			if (array[i][key] == value)
				return array[i]
		}
	}
}
s
module.exports.md5 = function(str){
	var hash = require('crypto').createHash('md5')
	hash.update(str)
	return hash.digest('hex')
}

module.exports.base64Encode = function(str){
	return new Buffer(str,'utf8').toString('base64')
	// node v6+
	// return Buffer.to(str,'utf8')
}

module.exports.base64Decode = function(str){
	return new Buffer(str,'base64').toString('utf8')
	// node v6+
	// return Buffer.from(str,'base64').toString('utf8')
}

module.exports.stringifyErr = function(err){
	return err instanceof Error ? '['+err.code+'] '+err.message
		: typeof err == 'string' ? err
		: JSON.stringify(err)
}

module.exports.requestOptsToCurl = function(requestOpts,data){
	if (!data && requestOpts.data) data = requestOpts.data
	var protocol = requestOpts.protocol || (requestOpts.port == 443 ? 'https:' : 'http:')
	return "curl -X "+requestOpts.method+" '"+protocol+'//'+requestOpts.hostname+(requestOpts.port?':'+requestOpts.port:'')+requestOpts.path+"' "+Object.keys(requestOpts.headers).reduce(function(prev,key){return prev+" -H '"+key+": "+requestOpts.headers[key]+"'"},'')+(requestOpts.method!='GET'?" --data '"+data+"'":"")
}

module.exports.dateDiff = function(d0,d1){
	if (d1 == undef)
		d1 = new Date;
	var secs = Math.round((d1-d0)/1000)
	,intervals = [
		['year',31536000]
		,['month',2628000]
		,['week',604800]
		,['day',86400]
		,['hour',3600]
		,['minute',60]
		,['second',1]
	]
	,str = []
	,n,i,c
	;
	for (i=0,c=intervals.length;i<c;++i) {
		if (secs < intervals[i][1])
			continue;
		n = Math.floor(secs/intervals[i][1]);
		secs -= n*intervals[i][1];
		str.push(n+' '+intervals[i][0]+(n==1?'':'s'));
	}
	if (!str.length)
		return '0 '+intervals.pop()[0]+'s';
	return str.join(', ');
}


module.exports.stats = function(opts){
	return new stats(opts);
};

function stats(opts){
	var z = this;
	z.opts = opts;
	if (typeof opts.output == 'string')
		opts.output = opts.output.split(',');
	z.output = {};
	(opts.output || ['list']).forEach(function(type){
		z.output[type] = true;
	});
}
stats.prototype.data = {};
stats.prototype.add = function(what,key,msg,done){
	var d = this.data;
	if (!d[what])
		d[what] = {};
	d[what][key] = msg;
	if (this.opts.verbose)
		console.log(what, key, JSON.stringify(msg), '\n');
	if (done)
		done();
}
stats.prototype.print = function(){
	var z = this
	,out = []
	;
	out.push('------ STATS ------\n');
	Object.keys(z.data).forEach(function(what){
		var keys = Object.keys(z.data[what]);
		out.push('### '+what+' ('+keys.length+')\n');
		if (z.output.array)
			out.push('["'+keys.join('","')+'"]\n');
		if (z.output.list) {
			keys.forEach(function(key){
				out.push(key+'\n');
				/*if (z.opts.verbose)
					out.push(z.opts.verbose ? ': '+JSON.stringify(z.data[what][key]) : '');*/
			});
		}
		out.push('\n');
	});
	out = out.join('');
	console.log(out);
	if (z.opts.outputFile)
		fs.writeFileSync(z.opts.outputFile, out);
}
stats.prototype.printOutputFilename = function(){
	console.log( path.basename(this.opts.outputFile) );
}

