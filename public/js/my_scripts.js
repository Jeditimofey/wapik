$(document).ready(function(){

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		$('.wrapper').css({
			backgroundPosition: 'center ' + st/2 + 'px'
			});
		$('.site-header').css({
			"transform": "translate(0%, -" + st/5 +"%"
			});

		if (st > 10) {
			$('.header-nav').css({
				"opacity": "0",
				"transition": "0.8s",
				"visibility": "hidden"
			});
		} else {
			$('.header-nav').css({
				"opacity": "1",
				"transition": "0.5s",
				"visibility": "visible"
			});
		}
		console.log(st);

	});



});

