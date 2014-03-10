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
});