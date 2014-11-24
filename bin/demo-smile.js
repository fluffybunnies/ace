#!/usr/bin/env node
/*
node ./bin/demo-smile.js
*/

var argv = require('minimist')(process.argv.slice(2))
,smile = require('cool-ascii-faces')
;

console.log(smile());

