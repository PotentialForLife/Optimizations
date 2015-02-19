var ctx = document.querySelector("canvas").getContext("2d");
var c = document.getElementById("canvas");
var screenManager = [];
screenManager[0] = new mainMenu();

c.onmousedown = function(e)
{
	screenManager[screenManager.length - 1].buttonPress(e);
};

function redraw(){
	screenManager[screenManager.length - 1].redrawMenu();
};

setInterval(redraw, 200);
