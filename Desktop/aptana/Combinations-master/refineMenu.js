var img = document.createElement("img");

function refineMenu(){
	img.src = "refine_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

refineMenu.prototype.type = "refine";

refineMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		screenManager.splice((screenManager.length - 1), 1);
		screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 150) && (x <= 382) && (y >= 125) && (y <= 193)){ //ice->water
		//do something
	}
	if ((x >= 150) && (x <= 382) && (y >= 268) && (y <= 336)){ //minerals->fertilizer
		console.log(control.minerals);
		control.fertilizer = control.Minerals/10;
		control.minerals = 0;
		console.log(control.fertilizer);
		//do something
	}
	if ((x >= 150) && (x <= 382) && (y >= 412) && (y <= 480)){ //minerals->nitrates
		control.nitrates = control.Minerals/10;
		control.minerals = 0;
		//do something
	}
};

refineMenu.prototype.update = function(){
	img.src = "refine_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
