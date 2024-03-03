
// ************************************** //
// STICKY HEADER
// ************************************** //

jQuery(document).ready(function($) {
    $('#demo-header').spSticyheader({
        hideHeaderTarget: '.header-top',
        scrollHeader: 200,
        customClass: 'make-small',
        mobileHeader: true
    })
});



// ************************************** //
// TESTIMONIALS CAROUSEL
// ************************************** //

$(document).ready(function() {
    $("#gmcTestimonial").owlCarousel({
        items: 3,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        margin: 0,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
});


// ************************************** //
// GLOBAL CLIENTS CAROUSEL
// ************************************** //

$(document).ready(function() {
    $("#ourClients").owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 500,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        margin: 30,
        //navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 3,
            },
            767: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
});




// ************************************** //
// RESPONSIVE FOOTER
// ************************************** //

$(".nav-footer h4").click(function () {
    $(this).parent(".nav").toggleClass("open");
});
if (window.screen.width > 1200) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass("active");
            $('header').removeClass("translucent");
        } else {
            $('header').removeClass("active");
            $('header').addClass("translucent");
        }
    });
}



// ************************************** //
// READ MORE-LESS
// ************************************** //

$(function(){
	$.fn.readmore = function( options ) {

		var settings = $.extend({
			div: this,
			hideText: "Read Less...",
			readText: "Read More...",
			isTextShown: false,
			effect: true,
			effectOption: "fast",
			buttonClasses: "btn-primary opacity-rollover",
			id: "read-more-action"
		},options);

		if(settings.isTextShown === false){
			$(settings.div).hide();
			$(settings.div).parent().append("<button id='"+settings.id+"' class='"+ settings.buttonClasses +"'>"+ settings.readText + "</button>");
		}else{
			$(settings.div).parent().append("<button id='"+settings.id+"' class='"+ settings.buttonClasses +"'>"+ settings.hideText + "</button>");
		}

		$(settings.div).parent().find("#" + settings.id).bind("click.readmore", function () {
			if(settings.isTextShown === false){
				$(settings.div).parent().find("#" + settings.id).text(settings.hideText);
				if(settings.effect === true){
					$(settings.div).fadeIn(settings.effectOption);
				}else{
					$(settings.div).show();
				}
				settings.isTextShown = true;
			}else{
				$(settings.div).parent().find("#" + settings.id).text(settings.readText);
				if(settings.effect === true){
					$(settings.div).hide();
				}else{
					$(settings.div).fadeOut(settings.effectOption);
				}
				settings.isTextShown = false;
			}
		});

	};
});


// SIDE BAR
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

