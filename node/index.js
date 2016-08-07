var trees5 = require('./assets/tree5');
var trees4 = require('./assets/tree4');
var trees3 = require('./assets/tree3');
var trees2 = require('./assets/tree2');
var trees0 = require('./assets/tree0');
var trees1 = require('./assets/tree1');
var animation = require('ascii-animation');
var simpleGit = require('simple-git')();

var tree = function(condition, callback, streak){
    animation.secondsPerFrame(0.5);
    if(streak == 1) {
      for ( var i = 0; i < trees1.length; i++ ) {
          trees1[i] = trees1[i] + '\r\n [GIT] Your current commit streak is '
      }
      animation.animate(trees1, condition, callback).bold();
    }
    if(streak == 2) {
      animation.animate(trees2, condition, callback).bold();
    }
    if(streak == 3) {
      animation.animate(trees3, condition, callback).bold();
    }
    if(streak == 4) {
      animation.animate(trees4, condition, callback).bold();
    }
    if(streak == 5) {
      animation.animate(trees5, condition, callback).bold();
    }
}

require('simple-git')()
    .log(function(err, log) {
      tree(function(){return true}, function(){return true}, getStreak(log.all));
      var lastCommit = new Date(log.latest.date);
      var now = new Date(Date.now());
})



function compareDates(d1, d2) {
        return d1.getDate() == d2.getDate() && d1.getMonth() == d2.getMonth() && d1.getYear() == d2.getYear();
}


function getStreak(logHistory){
  var next = new Date(Date.now());
  next.setDate(next.getDate()+1);
  var streak = 0;
  logHistory.forEach(function(entry) {
    var lastCommit = new Date(entry.date);
    var tomorrow = new Date(entry.date);
    tomorrow.setDate(tomorrow.getDate() +1);
    if(tomorrow.getDate() == next.getDate() && tomorrow.getMonth() == next.getMonth() && tomorrow.getYear() == next.getYear()){
      streak += 1;
    }else if (tomorrow == lastCommit){
      streak += 0;
    }else {
      return streak;
    }
    next = lastCommit;
  });
  return streak;
}

module.exports = tree;
