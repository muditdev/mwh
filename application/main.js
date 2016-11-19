$(document).ready(function(){
    projectColor();
});

function projectColor(){
  var colors = ['#fffcb6', '#dcffb6', '#a6e3e9', '#faf3df'];
  var $projects = $('.project').not('.product');
  for(i = 0; i<$projects.length; i++ ){
      $projects.eq(i).css('background-color', colors[i]);
    }
  }
