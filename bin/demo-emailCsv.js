#!/usr/bin/env node
/*
node ./bin/demo-emailCsv.js --emailTo='alec@luckygroupinc.com' --emailFrom='acquiremint@beachmint.com'
*/

var argv = require('minimist')(process.argv.slice(2))
,fs = require('fs')
,nodeMailer = require('nodemailer')
,sesTransport = require('nodemailer-ses-transport')
,path = require('path')
,config = require('../config.js')
,csvOut = require('../csvout')
,ut = require('../ut')
,outFile = __dirname+'/web/public-out/demo-csvwithnode.'+ut.fileTime()+'.csv'
,out = csvOut('demoEmailCsv', ['good'], __dirname+'/../out/')
,sampleDataPath = __dirname+'/../sample-data.json'
,emailTo = argv.emailTo || 'volcomstoner2689@gmail.com'
,emailFrom = argv.emailFrom || 'acquiremint-notifs@beachmint.com'
,subject = argv.subject || 'Sup'
,mailer
;

mailer = nodeMailer.createTransport(sesTransport({
	accessKeyId: config.awsAccessKey
	,secretAccessKey: config.awsAccessSecret
	,region: config.awsRegion
}));

console.log(['emailTo: '+emailTo, 'emailFrom: '+emailFrom, ''].join('\n'),'\n');

console.log('Output saving to:');
csvOut.printFileNames(out);
console.log('\n');


var items = [];
getData(function(err, data){
	if (err)
		return console.log(err);
	//console.log(JSON.stringify(data)+'\n');
	var files = csvOut.getFilePaths(out)
	,body = 'Here ya go!'
	,msg
	;
	console.log('Writing to: '+files[0]);
	data.forEach(function(d){
		items.push(d);
		out.good.write(d);
	});
	msg = {
    to: emailTo
    ,from: emailFrom
    ,subject: subject
    ,text: msg
    ,html: '<em>'+msg+'</em>'
    ,headers: {}
    ,attachments: [
			{
				filename: path.basename(files[0])
				//,content: fs.readFileSync(files[0])
				,path: files[0]
			}
    ]
	};
	console.log(msg);
	fs.appendFileSync('/tmp/test','Start: '+(new Date)+'\n');
	mailer.sendMail(msg,function(err, data){
		fs.appendFileSync('/tmp/test','End: '+(new Date)+'\n');
		if (err)
			return console.log('Error sending mail',err);
		console.log('Email sent!');
		console.log(data);
	});
});


function getData(cb){
	process.nextTick(function(){
		cb(false, require(sampleDataPath));
	});
}


