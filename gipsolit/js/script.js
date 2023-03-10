$(document).ready(function(){

	// modal window
	$('.popup-btn').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});

	//accordion
	$('.prices-item__spoiler').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	// advantages__slider
	$('.advantages__slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				prevArrow: '<button class="prev arrow"><img src="img/icons/arrow-prev.png"></button>',
				nextArrow: '<button class="next arrow"><img src="img/icons/arrow-next.png"></button>'
				}
			},
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<button class="prev arrow"><img src="img/icons/arrow-prev.png"></button>',
				nextArrow: '<button class="next arrow"><img src="img/icons/arrow-next.png"></button>'
				}
			}
		]
	});

	// feedback__slider
	$('.feedback-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="feedback-prev my-arrow"><img src="img/feedback-arrow-left.png"></button>',
		nextArrow: '<button class="feedback-next my-arrow"><img src="img/feedback-arrow-right.png"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					prevArrow: '<button class="feedback-prev my-arrow"><img src="img/feedback-arrow-left.png"></button>',
					nextArrow: '<button class="feedback-next my-arrow"><img src="img/feedback-arrow-right.png"></button>',
					dots: true
				}
			}
		]
	});

});