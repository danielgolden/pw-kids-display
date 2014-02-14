$(function() {
	$('.loading').hide();
	$('.wrapper').addClass('animated fadeIn');

	$('.row').click(function() {
		if($('.container').hasClass('active')) {
			$('.child-profile').removeClass('bounceInUp').addClass('bounceOutDown');
			setTimeout(function() {
				$('.container').removeClass('active');
				$('.child-profile').hide().removeClass('bounceOutDown animated');
			},500);
		} else {
			$('.container').addClass('active');
			setTimeout(function() {
				$('.child-profile').show().addClass('animated bounceInUp');
			}, 00);

		}
	});
});