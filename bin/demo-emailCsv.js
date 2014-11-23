#!/usr/bin/env node
/*
*/

var ut= require('../ut')
,inFile = __dirname+'../sample-data.json'
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
;

console.log(['inFile: '+inFile, 'outFile: '+outFile, ''].join('\n'),'\n');
