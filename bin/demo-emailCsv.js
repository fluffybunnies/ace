#!/usr/bin/env node
/*
node ./bin/demo-emailCsv.js
*/

var argv = require('minimist')(process.argv.slice(2))
,fs = require('fs')
,csvOut = require('../csvout')
,ut = require('../ut')
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
,out = csvOut('demoEmailCsv', ['good'], __dirname+'/../out/')
,emailTo = argv.emailTo || 'volcomstoner2689@gmail.com'
,emailFrom = argv.emailFrom || 'acquiremint-notifs@beachmint.com' 
;

console.log(['outFile: '+outFile].join('\n'),'\n');

console.log('Output saving to:');
csvOut.printFileNames(out);
console.log('\n');


var items = [];
getData(function(err, data){
	if (err)
		return console.log(err);
	//console.log('wefewf');process.exit();
	//console.log(JSON.stringify(data)+'\n');
	data.forEach(function(d){
		items.push(d);
		out.good.write(d);
	});
	console.log(JSON.stringify(items)+'\n');
});


function getData(cb){
	process.nextTick(function(){
		cb(false, require(__dirname+'/../sample-data.json'));
	});
}