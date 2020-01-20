$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		nav: true,
		navText : ["<img src='../../img/header/nav-prev.png'>","<img src='../../img/header/nav-next.png'>"],
		responsive: {
			0: {
				autoHeight:true
			},

			1231: {
				autoHeight: false
			}
		}
	});


	$("#footer-content h4").on('click', function(){
		if ($(this).find('img').css('display') == 'inline-block') {
			$(this).find('img').toggleClass('rotate');
			$(this).next("ul").slideToggle(200)
		}
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
 		$('#mobile-menu.my-dropdown-menu').slideToggle(400);
 	});

 	$('#close-menu img').on('click', function() {
 		$(this).parent().hide();
 		$('#hamb-block img').parent().fadeIn();
 		$('#mobile-menu.my-dropdown-menu').slideToggle(400);
 	});

 	$('#show-catalog-menu').on('click', function() {
 		$(this).parent().hide();
 		$('#mobile-catalog-menu').fadeIn();
 	});

 	$('#mobile-catalog-menu .back').on('click', function() {
 		$(this).parent().hide();
 		$('#main-mobile-menu').fadeIn();
	});

	$('#catalog-link a').on('click', function(e) {
		e.preventDefault();
	});

	$('#catalog-link').on('click', function() {
		$(this).toggleClass('showed');
 		$('#large-catalog-menu.my-dropdown-menu').slideToggle(400);
 	});

	$(".owl-nav").before($(".owl-dots"));

});