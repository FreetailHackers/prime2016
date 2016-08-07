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
          trees1[i] = trees1[i] + '\r\n [GIT-GROW 🌳] Your current commit streak is 1, commit every day to grow your tree!'
      }
      animation.animate(trees1, condition, callback).bold();
    }
    if(streak == 2) {
      for ( var i = 0; i < trees2.length; i++ ) {
          trees2[i] = trees2[i] + '\r\n [GIT-GROW 🌳] Your current commit streak is 2, commit every day to grow your tree!'
      }
      animation.animate(trees2, condition, callback).bold();
    }
    if(streak == 3) {
      for ( var i = 0; i < trees3.length; i++ ) {
          trees3[i] = trees3[i] + '\r\n [GIT-GROW 🌳] Your current commit streak is 3, commit every day to grow your tree!'
      }
      animation.animate(trees3, condition, callback).bold();
    }
    if(streak == 4) {
      for ( var i = 0; i < trees4.length; i++ ) {
          trees4[i] = trees4[i] + '\r\n [GIT-GROW 🌳] Your current commit streak is 4, commit every day to grow your tree!'
      }
      animation.animate(trees4, condition, callback).bold();
    }
    if(streak == 5) {
      for ( var i = 0; i < trees5.length; i++ ) {
          trees5[i] = trees5[i] + '\r\n [GIT-GROW 🌳] Your current commit streak is ' + streak + ', your tree is now fully grown! 💯'
      }
      animation.animate(trees5, condition, callback).bold();
    }
    if (streak == 0){
      for ( var i = 0; i < trees0.length; i++ ) {
          trees0[i] = trees0[i] + '\r\n [GIT-GROW 🌳] You have not committed to this repository today 😭, commit a change to plant a tree.'
      }
      animation.animate(trees0, condition, callback).bold();
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

var options = {
  fit:    'box',
  width:  200,
  height: 100
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
