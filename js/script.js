$(document).ready(function() {
  console.log('script.js loaded');



  //firefly background
 //  $.firefly({
	// color: 'rgba(247, 247, 255, 0.5)',
	// minPixel: 1,
	// maxPixel: 2,
	// total : 70,
	// on: '#particles-js'
 //  });

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

  //jquery slideshow 


  // css changes on scroll height
  $(document).scroll(function() {

  	var topOfAbout = $("#about").offset().top;
  	var topOfWorks = $("#portfolio").offset().top;
  	var  boxHeight = $(window).height();
  	$(window).scroll(function() {
  		var topOfWindow = $(window).scrollTop();
  		if (topOfAbout < topOfWindow) {
  			$('.aboutLi').css("color", "#F7F7FF");
  			$('.aboutLi').css("color", "rgba(247, 247, 255, 1)");
  		}
  	});

  });

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




});
