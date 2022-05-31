$(document).ready(function () {
	//Для липкого меню
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 90) {
			$("nav").addClass("fix");
		} else {
			$("nav").removeClass("fix");
		}
	});
	//конец липкого меню
});