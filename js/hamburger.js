console.log('ham.js loaded.')

$(function(){
	$('.hamburger-container, .cross-container, .menuOption').on('click',function(){
		console.log('clicked.')
	  $('.hamburger-container').toggleClass('open');
		$('.cross-container').toggleClass('open');
	})
})
