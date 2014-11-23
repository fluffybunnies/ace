#!/usr/bin/env node
/*
*/

var ut= require('../ut')
;

var fileName = __dirname+'/web/public-out/demo-csvwithphp.'+ut.fileTime()+'.csv';
console.log(fileName);
//generateCsv(