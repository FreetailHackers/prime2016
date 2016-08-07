#!/usr/bin/env node

var keypress = require('keypress');

keypress(process.stdin);

require('./index')(function(){
  return true;
},
function() {
  console.log('done');
});

process.stdin.on('keypress', function(){
  process.exit();
});
