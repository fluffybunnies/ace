#!/usr/bin/env node
/*
*/

var fs = require('fs')
,csvOut = require('../csvout')
//,ut = require('../ut')
,inData = require(__dirname+'/../sample-data.json')
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
,out = csvOut('demoEmailCsv', ['good'], __dirname+'/../out/')
;

console.log(['inData: '+inData, 'outFile: '+outFile].join('\n'),'\n');

console.log('Output saving to:');
csvOut.printFileNames(out);
console.log('\n');


getData(function(err,data){
	if (err)
		return console.log(err);
	out.write(data);
});


function getData(cb){
	process.nextTick(function(){
		cb(false, inData);
	});
}