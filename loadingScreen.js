var img = document.createElement("img");

function loadingScreen(){
	img.src = "load_screen0 copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
	this.imgNum = 0;
}

loadingScreen.prototype.redrawMenu = function(){
	switch(this.imgNum){
		case 0:
			img.src = "load_screen1 copy.png";
			this.imgNum = 1;
			break;
		case 1:
			img.src = "load_screen2 copy.png";
			this.imgNum = 2;
			break;
		case 2:
			img.src = "load_screen3 copy.png";
			this.imgNum = 3;
			break;
		case 3:
			img.src = "load_screen4 copy.png";
			this.imgNum = 4;
			break;
		case 4:
			img.src = "load_screen5 copy.png";
			this.imgNum = 5;
			break;
		case 5:
			img.src = "load_screen6 copy.png";
			this.imgNum = 6;
			break;
		case 6:
			img.src = "load_screen7 copy.png";
			this.imgNum = 7;
			break;
		case 7:
			img.src = "load_screen0 copy.png";
			this.imgNum = 0;
			break;
	}
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};