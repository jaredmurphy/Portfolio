$(document).ready(function() {
  console.log('script.js loaded');

  // jquery smooth scrolling
  smoothScroll.init();

  // intro animations
  setTimeout(function() {
  	$('.nameTag h1').css("display", "block").addClass("slideInLeft");
  	setTimeout(function() {
  		$('.nameTag h3').css("display", "block").addClass("slideInLeft");
  		$('.portfolio_pieces li').show().addClass("rollIn");
  	}, 1000)
  	setTimeout(function() {
  		$('.vertical_line').fadeIn('slow');
  	}, 2500);
  }, 2000);



  // css changes on scroll height
  $(document).scroll(function() {
  	var topOfContact = $("#contact").offset().top -400;
  	var topOfWorks = $("#portfolio").offset().top;
  	var  boxHeight = $(window).height();
  	$(window).scroll(function() {
  		var topOfWindow = $(window).scrollTop();
  		if (topOfContact < topOfWindow) {
        console.log('hit');
  			$('.home_menu a').css("color", "rgba(2, 70, 109, 0.75)");
        $('.home_menu li').css("color", "rgba(2, 70, 109, 0.75)");
        $('.home_menu a').hover(function() {
          $(this).css('color', 'rgba(2, 70, 109, 1)');
          $(this).css('font-weight', 'bold');
          }, function() {
          $('.home_menu a').css('color', 'rgba(2, 70, 109, 0.75)');
          $('.home_menu a').css('font-weight', 'normal');
        }); // ends hover function
  		} else if (topOfContact > topOfWindow) {
        $('.home_menu a').css('color', 'rgba(247, 247, 255, 0.5)');
        $('.home_menu li').css('color', 'rgba(247, 247, 255, 0.5)');

        $('.home_menu a').hover(function() {
          $(this).css('color', 'rgba(247, 247, 255, 1)');
          }, function() {
          $('.home_menu a').css('color', 'rgba(247, 247, 255, 0.5)')
        }); // ends hover function
      } // ends else if
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
  });
  

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
  	}
  );
}); // ends document ready function //
