var img = document.createElement("img");

function controlsMenu(){
	img.src = "controls_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

controlsMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 504)){ //back button
		screenManager.splice((screenManager.length - 1), 1);
		screenManager[screenManager.length - 1].redrawMenu();
	}
};

controlsMenu.prototype.redrawMenu = function(){
	img.src = "controls_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};