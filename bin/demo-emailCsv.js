#!/usr/bin/env node
/*
*/

var ut= require('../ut')
;

var fileName = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv';
console.log(fileName);
//generateCsv(