$(document).foundation();

+function($){
  'use strict';

    var $root = $('html, body');
    var $nav = $('.top-bar-section');
    var $link = $('a');

    $nav.on('click', 'a', function(event){
      if( $(this)[0].hash.length > 0 ){
        event.preventDefault();
        $root.animate({scrollTop: $($.attr(this, 'href')).offset().top}, 300);
      }
    });

    $link.on('click', function(){
      if( $(this)[0].hash.length > 0 ){
        event.preventDefault();
        $root.animate({scrollTop: $($.attr(this, 'href')).offset().top}, 300);
      }
    })


}($);
