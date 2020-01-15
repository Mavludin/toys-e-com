$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		autoHeight:true,
		responsive: {
			0: {
				nav: false
			},

			900: {
				nav: false
			}
		}
	});


	$("#footer-content h4 i").on('click', function(){
		$(this).toggleClass('rotate');
        $(this).parent().next("ul").slideToggle(200)
	});

	if ($(window).width() <= 480 ) {
    	$("input[type='search']").attr("placeholder","Поиск по сайту");
	} else $("input[type='search']").attr("placeholder","Поиск по товарам и брендам");

    $(window).resize(function () {
        if ($(window).width() <= 480) {
    		$("input[type='search']").attr("placeholder","Поиск по сайту");
        } else $("input[type='search']").attr("placeholder","Поиск по товарам и брендам");
    });

 	$('#hamb-block img').on('click', function() {
 		$(this).parent().hide();
 		$('#close-menu img').parent().fadeIn();
 		$('#mobile-menu').slideToggle(400);
 	});

 	$('#close-menu img').on('click', function() {
 		$(this).parent().hide();
 		$('#hamb-block img').parent().fadeIn();
 		 $('#mobile-menu').slideToggle(400);
 	});

 	$('#show-catalog-menu').on('click', function() {
 		$(this).parent().hide();
 		$('#catalog-menu').fadeIn();
 	});

 	$('#catalog-menu .back').on('click', function() {
 		$(this).parent().hide();
 		$('#main-mobile-menu').fadeIn();
 	});

});