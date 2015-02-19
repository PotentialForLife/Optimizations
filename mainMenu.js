var newGame = "New Game Button Pressed.";
var controls = "Controls Button Pressed.";
var credits = "Credits Button Pressed.";
var quit = "Quit Button Pressed.";
var img = document.createElement("img");

function mainMenu(){
	img.src = "main_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

mainMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 247) && (y <= 280)){
		screenManager[screenManager.length] = new loadingScreen();
	}
	if ((x >= 189) && (x <= 416) && (y >= 323) && (y <= 356)){
		console.log(controls);
	}
	if ((x >= 189) && (x <= 416) && (y >= 401) && (y <= 433)){
		screenManager[screenManager.length] = new creditsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 505)){
		console.log(quit);
	}
};

mainMenu.prototype.redrawMenu = function(){
	img.src = "main_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};