$(document).ready(function() {
  

  // jquery smooth scrolling
  smoothScroll.init();

  // intro animations
  setTimeout(function() {
  	$('.nameTag h1').css("display", "block").addClass("slideInLeft");
  	setTimeout(function() {
  		$('.nameTag h3').css("display", "block").addClass("slideInLeft");
  	}, 1000)
  	setTimeout(function() {
  		$('.vertical_line').fadeIn('slow');
  	}, 2500);
  }, 2000);

  // menu
  $('.menuButton').click(function() {
      $('.menu').toggleClass('show');
      $('.about').hide();
      $('.work').hide();
      $('.contact').hide();
      $('.vertical_line').toggleClass('no_v_line');

  });

  // about
  $('.aboutButton').click(function() {
      $('.about').show();
  });

  // work
  $('.workButton').click(function() {
      $('.work').show();
  });

  // contact
  $('.contactButton').click(function() {
      $('.contact').show();
  });

  // work content
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


  // css changes on scroll height
  $(document).scroll(function() {

  	$(window).scroll(function() {
          
        }); // ends window scroll function
  }); // ends document scroll function


  // skills animation
  var animationOut;
  var animationIn;
  $('.skill-front, .skill-back').click(function() {
    $('.skill-front, .skill-back').addClass('shake').fadeOut();
    setTimeout(function() {
      $('.skill-front, .skill-back').removeClass('shake').fadeIn();
    }, 1000);
  }); // ends click function
  

  // portfolio image hover
  var piece;
  $('.img_hover').hover(function() {
  	if ($(this).hasClass('watch')){
  		piece = 'watch';
  	} else if ($(this).hasClass('climate')) {
  		piece = 'climate';
  	} else if ($(this).hasClass('invest')) {
  		piece = 'invest';
  	} else if ($(this).hasClass('chit-chat')) {
  		piece = 'chit-chat';
  	}
        $('.' + piece + 'Pic').addClass('hidden');
  	$('.' + piece + 'Text').addClass('show');
    }, function() {
        $('.portfolio_pic').removeClass('hidden');
        $('.portfolio_text').removeClass('show');
    });// ends hover function

}); // ends document ready function //
