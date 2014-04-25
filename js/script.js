$(function() {
	$('.loading').hide();
	$('.wrapper').addClass('animated fadeIn');

	$('.row').click(function() {
		if($('.container').hasClass('active')) {
			$('.child_profile').removeClass('bounceInUp').addClass('bounceOutDown');
			setTimeout(function() {
				$('.container').removeClass('active');
				$('.child_profile').hide().removeClass('bounceOutDown animated');
			},500);
		} else {
			$('.container').addClass('active');
			setTimeout(function() {
				$('.child_profile').show().addClass('animated bounceInUp');
			});

		}
	});

	$('.close-button').click(function() {
		$('.container').removeClass('active');
		$('.child_profile').hide().removeClass('bounceOutDown animated');
	});

	var scrollPosition
	var rotatePosition

	$(window).scroll(function() {
		scrollPosition = $(this).scrollTop();
		rotatePosition = - scrollPosition / 6.3 + 65;
		scale = scrollPosition / 1080 + .625;
		footerOpacity = scrollPosition / 400;

		if(rotatePosition < 1) {
			rotatePosition = 0;
		} if (scale > 1) {
			scale = 1;
		} else if (scale < .625) {
			scale = .625;
		}

		$('.container').attr('style', '-webkit-transform: rotateX('+ rotatePosition +'deg) scale('+ scale +', '+ scale +');');
		$('footer, .cta').attr('style', 'opacity:'+ footerOpacity +';');
	});
});