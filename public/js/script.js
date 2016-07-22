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
      console.log('click');
      $('.menu').toggleClass('show');
      $('.burger g').toggleClass('bright');
      $('.vertical_line').toggleClass('no_v_line');
  });

  $('.menu div').mouseenter(function() {
      $(this).animate({borderwidth: 4}, 500);
  })
  .mouseleave(function() {
      $(this).animate({borderwidth: 0}, 500);
  });


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
