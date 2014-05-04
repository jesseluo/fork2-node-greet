#!/usr/bin/env node

var parseArgs = require('minimist');
var greetFunc = require("greet");

var argv = parseArgs(process.argv.slice(2));

// console.log(argv);
console.log(greetFunc(argv._, argv.drunk));
