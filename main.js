var ctx = document.querySelector("canvas").getContext("2d");
var c = document.getElementById("canvas");
var img = document.createElement("img");
img.src = "main_menu copy.png";
ctx.drawImage(img, 0, 0);
var newGame = "New Game Button Pressed.";
var controls = "Controls Button Pressed.";
var credits = "Credits Button Pressed.";
var quit = "Quit Button Pressed.";
  
function buttonPress(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 247) && (y <= 280)){
		console.log(newGame);
	}
	if ((x >= 189) && (x <= 416) && (y >= 323) && (y <= 356)){
		console.log(controls);
	}
	if ((x >= 189) && (x <= 416) && (y >= 401) && (y <= 433)){
		console.log(credits);
	}
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 505)){
		console.log(quit);
	}
};

c.onmousedown = function(e)
{
	buttonPress(e);
};


