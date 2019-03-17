const menu = document.querySelector(".fa-bars");
const dd = document.querySelector(".sect-list");
menu.addEventListener('click', function () {
	console.log("clicked");
	dd.classList.toggle('menu-hidden');
});
dd.addEventListener('click', function () {
	dd.classList.toggle('menu-hidden');
})