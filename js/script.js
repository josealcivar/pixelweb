$(document).ready(function() {

	// //Smooth Scroll
	// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	&& 
	location.hostname == this.hostname
  ) {
	// Figure out element to scroll to
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	// Does a scroll target exist?
	if (target.length) {
	  // Only prevent default if animation is actually gonna happen
	  event.preventDefault();
	  $('html, body').animate({
		scrollTop: target.offset().top
	  }, 1000, function() {
		// Callback after animation
		// Must change focus!
		var $target = $(target);
		$target.focus();
		if ($target.is(":focus")) { // Checking if the target was focused
		  return false;
		} else {
		  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		  $target.focus(); // Set focus again
		};
	  });
	}
  }
});



	// Main Menu
	$('#main-nav').affix({
		offset: {
			top: $('header').height()
		}
	});

	$(".navbar-collapse a").on('click', function() {
		$(".navbar-collapse.collapse").removeClass('in');
	});

	// Top Search
	$("#ss").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('current');
		$(".search-form").toggleClass('visible');
	});


	//Slider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		pauseOnAction: false,
	});

	var containerPosition = $('.container').offset();
	var positionPad = containerPosition.left + 15;

	$('#slider').find('.caption').css({
		left: positionPad + 'px',
		marginTop: '-' + $('.caption').height() / 2 + 'px'
	});


	// number effect
	$('.about-bg-heading').one('inview', function(event, visible) {
		if (visible == true) {
			$('.count').each(function() {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 5000,
					easing: 'swing',
					step: function(now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});


	//Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);

});
