$("#left-nav .left-menu > a").click(function (b) {
	$("#left-nav ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
		b.stopPropagation()
});




//* Side-Bar-Menu - animation
var sideopen = document.getElementById('sideopen');
var sidenav = document.getElementById('sidebar-link');


sideopen.onmouseenter = function openNav() {
	document.getElementById("sideopen").style.width = "15em";
	document.getElementById("sidebar-link").style.opacity = "1";

}

sideopen.onmouseleave = function closeNav() {
	document.getElementById("sideopen").style.width = "0";
	document.getElementById("sidebar-link").style.opacity = "0";

	
};

//* Цикл через все кнопки выпадающего списка для переключения между скрытием и отображением его выпадающего содержимого - это позволяет пользователю иметь несколько выпадающих списков без каких-либо конфликтов

var dropdown = document.getElementsByClassName("drop-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active-link");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
};


function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("select", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " select";
}

// //* Получите элемент с id="defaultOpen" и нажмите на него
document.getElementById("defaultOpen").click();



//* Serch
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


