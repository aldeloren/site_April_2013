// main.js
$(document).ready(function () { 
//dynamic text
	$('#portfolio-link').click(function () {
		$('#main').fadeOut('fast');
		$('#portfolio').show('slide', { direction: 'up' }, 1000);
		$('#hidden-name').delay(1000).fadeIn('fast');
	});
	$('#portfolio-back').click(function () {
		$('#main').delay(1000).fadeIn('fast');
		$('#portfolio').hide('slide', { direction: 'down' }, 1000);
		$('#hidden-name').delay(600).fadeOut('fast');
	});
	$('#other').click(function () {
		$('#main-secondary').fadeIn('fast');
	});
	$('.close').click(function () {
		$('#main-secondary').fadeOut('fast');
	});
	$('#blogs').click(function () {
		$('#main-secondary img, #main-secondary .close').fadeOut('fast');
		$('#main-secondary-secondary').fadeIn('fast');
	});
	$('#main-secondary-secondary .close').click(function () {
		$('#main-secondary, #main-secondary-secondary').fadeOut('fast');
		$('#main-secondary img, #main-secondary .close').delay(500).fadeIn();
	});
});