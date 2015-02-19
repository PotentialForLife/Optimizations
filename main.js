var ctx = document.querySelector("canvas").getContext("2d");
var c = document.getElementById("canvas");
var screen;
var screenManager = [];
screenManager[0] = new mainMenu();

c.onmousedown = function(e)
{
	screenManager[screenManager.length - 1].buttonPress(e);
};