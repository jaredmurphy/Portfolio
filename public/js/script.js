$(document).ready(function() {
  
  // intro animations
  setTimeout(function() {
  	$('.nameTag h1').css("display", "block").addClass("slideInLeft");
  	setTimeout(function() {
  		$('.nameTag h3').css("display", "block").addClass("slideInLeft");
  	}, 1000)
  	setTimeout(function() {
  		$('.vertical_line').fadeIn('slow');
        $('.animated').removeClass("animated");
  	}, 1500);
  }, 1000);



  // show or hide menu
  $('.menuButton').on('click', function() {
      if ($('.menu').is(':visible')) {
            $('.menu').fadeOut();
            $('.nameTag').fadeIn();
      } else {  
            $('.page').fadeOut();
            $('.menu').fadeIn();
            $('.nameTag').fadeOut();
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


  // close button animate
  var closeAnimate = function() {
      //$('.close').css('display', 'block');
    //  $('.close g').addClass('closeAnimate');
  }

  var closeReset = function() {
      $('.close').css({
          'transform': 'rotateZ(90deg)'
      });
  }


}); // ends document ready function //
