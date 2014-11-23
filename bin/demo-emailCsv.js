#!/usr/bin/env node
/*
node ./bin/demo-emailCsv.js
*/

var fs = require('fs')
,csvOut = require('../csvout')
,ut = require('../ut')
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
,out = csvOut('demoEmailCsv', ['good'], __dirname+'/../out/')
;

console.log(['outFile: '+outFile].join('\n'),'\n');

console.log('Output saving to:');
csvOut.printFileNames(out);
console.log('\n');


getData(function(err,data){
	if (err)
		return console.log(err);
	//console.log('wefewf');process.exit();
	//console.log(JSON.stringify(data)+'\n');
	data.forEach(function(d){
		out.good.write(d);
	});
});


function getData(cb){
	process.nextTick(function(){
		cb(false, require(__dirname+'/../sample-data.json'));
	});
}