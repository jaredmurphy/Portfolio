console.log('ham.js loaded.')

$(function(){
	$('.hamburger-container, .cross-container').on('click',function(){
		console.log('clicked.')
	  $('.hamburger-container').toggleClass('open');
		$('.cross-container').toggleClass('open');
	})
})
