//* Side-Bar-Menu - animation
var sideopen = document.getElementById('sideopen');
var sidenav = document.getElementById('link');
var sidenav = document.getElementById('content');

sideopen.onmouseenter = function openNav() {
	document.getElementById("sideopen").style.width = "13rem";
	document.getElementById("link").style.opacity = "1";

}

sideopen.onmouseleave = function closeNav() {
	document.getElementById("sideopen").style.width = "0";
	document.getElementById("link").style.opacity = "0";

	
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

// //* Serch second
$(document).ready(function () {
	$("input").bind("click", function () {
		var input = $(this);

		if (input.val() == "Search") {
			input.val("");
		} else {
			this.select();
		}

		$("#wrap-search-second").addClass("active");
		$(input).parent().removeClass("close").addClass("expand");
	});

	$("#icn-close").bind("click", function () {
		$("#wrap-search-second").removeClass("active");
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




// //*фиксированный Side-Bar-Menu
// window.onscroll = function () { myFunction() };

// var sidenav = document.getElementById("sideopen");
// var sticky = sidenav.offsetTop;

// function myFunction() {
// 	if (window.pageYOffset > sticky) {
// 		sidenav.classList.add("sticky");
// 	} else {
// 		sidenav.classList.remove("sticky");
// 	}
// }