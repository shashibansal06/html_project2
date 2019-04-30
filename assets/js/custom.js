wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
});
wow.init();

function scrollWindow() {
  var scroll = $(window).scrollTop();
  if (scroll >= 120) {
    $('header').addClass('fixed-header');
  } else {
    $('header').removeClass('fixed-header');
  }
}

$(document).ready(function() {
  scrollWindow();

  $('.menu_btn').click(function() {
    $('nav').toggleClass('open bounceInRight');
    $('.menu_btn').toggleClass('cross');
  });

  $('nav').click(function() {
    $('nav').removeClass('open bounceInRight');
    $('.menu_btn').removeClass('cross');
  });

  if ($('header').offset().top > 0) {
    $('header .wow').each(function() {
      $(this).addClass('fixedWow');
    });
  }
});

$(window).scroll(function() {
  scrollWindow();
});
