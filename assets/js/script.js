$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		nav: false,
		responsive: {
			0: {
				nav: false
			},

			900: {
				nav: false
			}
		}
	});


	$("#footer-content h4").on('click', function(){
		$(this).find('i').toggleClass('rotate');
        $(this).next("ul").slideToggle(200)
	});

});