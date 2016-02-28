$(document).ready(function(){

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		$('.wrapper').css({
			backgroundPosition: 'center ' + st/2 + 'px'
			});
		$('.site-header').css({
			"transform": "translate(0%, -" + st/5 +"%"
			});
	});

});

