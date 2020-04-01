var veri = 1;

var icon = document.querySelector('.icon')
var x = document.getElementById('x')
console.log(icon)

var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
	var menu = document.getElementById('menu-hidde');
	if (veri == 1) {
		menu.style.left = "0px";
		icon.style.display = "none"
		x.style.display = "inline-block"
		veri = 0;
	}else{
		menu.style.left = "-100%";
		icon.style.display = "inline-block"
		x.style.display = "none"
		veri = 1;
	}
})
