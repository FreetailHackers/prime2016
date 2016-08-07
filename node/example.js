#!/usr/bin/env node

var keypress = require('keypress');

keypress(process.stdin);

require('./index');  

process.stdin.on('keypress', function(){
  process.exit();
});
