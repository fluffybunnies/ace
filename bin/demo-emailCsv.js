#!/usr/bin/env node
/*
*/

var fs = require('fs')
,csvPars = require('csv-parse')
,ut= require('../ut')
,inData = require(__dirname+'/../sample-data.json')
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
;

console.log(['inData: '+inData, 'outFile: '+outFile].join('\n'),'\n');

