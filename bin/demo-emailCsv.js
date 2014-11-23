#!/usr/bin/env node
/*
*/

var fs = require('fs')
,csvOut = require('../csvout')
//,ut = require('../ut')
,inData = require(__dirname+'/../sample-data.json')
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
;

console.log(['inData: '+inData, 'outFile: '+outFile].join('\n'),'\n');

createCsv(inData, function(err,data){
	if (err)
		return console.log('Err: ',err);
});