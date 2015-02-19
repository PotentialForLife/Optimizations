function creditsMenu(){
	img = document.createElement("img");
	img.src = "credits_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

creditsMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 504)){
		console.log(newGame);
	}
};