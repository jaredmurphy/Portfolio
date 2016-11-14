$(document).ready(function() {

  // show or hide menu
  $('.hamburger-container, .cross-container').click(function() {
      if ($('.menu').is(':visible')) {
            $('.menu').hide();
            $('.nameTag').show();
      } else {
            $('.page').hide();
            $('.menu').show();
            $('.nameTag').hide();
      }
  });

  // show about, work, contact pages
  $('.menuOption').click(function() {
    $('.menu').hide();
    switch (true) {
      case $(this).hasClass('aboutButton'):
        $('.about').show();
        break;
      case $(this).hasClass('workButton'):
        $('.workContent').hide();
        $('.work').show();
        break;
      case $(this).hasClass('contactButton'):
        $('.contact').show();
        break;
    }
  });

  // display appropriate work content
  $('.workHover li').hover(function() {
    switch (true) {
        case $(this).hasClass('current'):
            var $content = $('.current');
            break;
        case $(this).hasClass('other'):
            var $content = $('.other');
            break;
        case $(this).hasClass('past'):
            var $content = $('.past');
            break;
        default:
            var $content = $('.blank');
    }
    $('.workContent').hide();
    $('.openSource').hide();
    $content.show();
  });

  // display appropriate open source content
  $('.openSourceHover li').hover(function() {
    switch (true) {
        case $(this).hasClass('contributions'):
            var $content = $('.contributed');
            break;
        case $(this).hasClass('original'):
            var $content = $('.originalWork');
            break;
        default:
            var $content = $('.blank');
    }
    $('.openSource').hide();
    $content.show();
  });

}); // ends document ready function //
