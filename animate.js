new WOW().init();

jQuery(document).ready(function($){
    $('.type-it').typeIt({
      speed: 90,
      startDelay: 3000,
      cursor: false,
      autostart: true
    });
});

jQuery(document).ready(function($){
    $('.type-it2').typeIt({
      speed: 120,
      cursor: false,
      lifeLike: false,
      autostart: true

    });
});
