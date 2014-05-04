#!/usr/bin/env node

parseArgs = require('minimist');
greetFunc = require("greet");

argv = parseArgs(process.argv.slice(2));

// console.log(argv);
console.log(greetFunc(argv._, argv.drunk));
