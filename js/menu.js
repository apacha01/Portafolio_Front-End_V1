let menuBtn = document.getElementById("menu__icon");
let menu = document.getElementById("menu");
let links = document.getElementsByClassName("menu__link");

function show (){
	menu.classList.toggle('showMenu');
}

menuBtn.addEventListener('click', show);

for (var i = 0; i < links.length; i++)
	links[i].addEventListener('click', show);