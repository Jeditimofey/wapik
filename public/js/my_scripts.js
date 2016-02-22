$(document).ready(function(){

	$(window).scroll(function () {
		var movement = -parseInt($(this).scrollTop() / 4);
		$('.wrapper').css({
			backgroundPosition: 'center ' + movement + 'px'
			});
	});

});

