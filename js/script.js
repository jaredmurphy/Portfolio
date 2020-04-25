$(document).ready(function() {

  const flexShow = $element => {
    $element.css('display', 'flex');
  };

  // show or hide menu
  $('.hamburger-container, .cross-container').click(function() {
    if ($('.menu').is(':visible')) {
      $('.menu').hide();
      $('.nameTag').show();
    } else {
      $('.page').hide();
      flexShow($('.menu'));
      $('.nameTag').hide();
    }
  });

  // show about, work, contact pages
  $('.menuOption').click(function() {
    $('.menu').hide();
    switch (true) {
      case $(this).hasClass('aboutButton'):
        flexShow($('.about'))
        break;
      case $(this).hasClass('workButton'):
        $('.workContent').hide();
        $('.work').show();
        defaultWorkInfo();
        break;
      case $(this).hasClass('contactButton'):
        flexShow($('.contact'))
        break;
    }
  });

  // display current work info by default
  const defaultWorkInfo = () => {
    if ($('.work').css('display') === 'block') {
      $('.current').show();
    }
  }

  // display appropriate work content on hover
  $('.workHover li').hover(function() {
    let content;
    switch (true) {
      case $(this).hasClass('current'):
        $content = $('.current');
        break;
      case $(this).hasClass('other'):
        $content = $('.other');
        break;
      case $(this).hasClass('past'):
        $content = $('.past');
        break;
      default:
        $content = $('.blank');
    }
    $('.workContent').hide();
    $('.openSource').hide();
    $content.show();
  });

  // display appropriate open source content
  $('.openSourceHover li').hover(function() {
    let content;
    switch (true) {
      case $(this).hasClass('contributions'):
        $content = $('.contributed');
        break;
      case $(this).hasClass('original'):
        $content = $('.originalWork');
        break;
      default:
        $content = $('.blank');
    }
    $('.openSource').hide();
    $content.show();
  });

}); // ends document ready function //
