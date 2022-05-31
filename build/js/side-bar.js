var sideopen = document.getElementById('sideopen');
var sidenav = document.getElementById('sidenav');

sideopen.onmouseenter = function openNav() {
	document.getElementById("sideopen").style.width = "13rem";
	document.getElementById("sidenav").style.width = "13rem";
	document.getElementById("sidenav").style.opacity = "1";
	document.getElementById("content").style.marginLeft = "13.2rem";
	document.getElementById("middle").style.marginLeft = "13.2rem";

}

sideopen.onmouseleave = function closeNav() {
	document.getElementById("sideopen").style.width = "0";
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("sidenav").style.opacity = "0";
	document.getElementById("content").style.marginLeft = "1.3rem";
	document.getElementById("middle").style.marginLeft = "1.3rem";

}
// Поиск
$(document).ready(function () {
	$("input").bind("click", function () {
		var input = $(this);

		if (input.val() == "Search") {
			input.val("");
		} else {
			this.select();
		}

		$("#wrap-search").addClass("active");
		$(input).parent().removeClass("close").addClass("expand");
	});

	$("#icn-close").bind("click", function () {
		$("#wrap-search").removeClass("active");
		$(this).parent().addClass("close").removeClass("expand");
		$(this).parent().children("input").val("Search");
	});

	$("input").bind("blur", function () {
		input = $(this);
		if (input.val() == "") {
			$("#icn-close").trigger("click");
		}
	});
});

/* Цикл через все кнопки выпадающего списка для переключения между скрытием и отображением его выпадающего содержимого - это позволяет пользователю иметь несколько выпадающих списков без каких-либо конфликтов */
var dropdown = document.getElementsByClassName("drop-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}