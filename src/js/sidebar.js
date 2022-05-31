/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
sideopen.onmouseenter = function openNav() {
	document.getElementById("sideopen").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}
sideopen.onmouseleave = function closeNav() {
	document.getElementById("sideopen").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}