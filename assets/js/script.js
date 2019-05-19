$(document).ready(function () {

	// Preloader
	$(window).on('load', function () {
		$('.preloader-background').delay(1500).fadeOut('slow');
	});

	// Sidenav
	$('.sidenav').sidenav();

	

	// Carousel
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});

	// Parallax
	$('.parallax').parallax();

	// Anchor
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});


});