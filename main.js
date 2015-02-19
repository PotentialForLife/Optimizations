var ctx = document.querySelector("canvas").getContext("2d");
var c = document.getElementById("canvas");
var screen;
  
var menu = new mainMenu();

c.onmousedown = function(e)
{
	menu.buttonPress(e);
};


