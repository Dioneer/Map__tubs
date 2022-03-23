$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});