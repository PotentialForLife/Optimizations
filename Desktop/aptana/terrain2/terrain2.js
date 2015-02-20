//DOM
var canvas = document.getElementById ( 'canvas' );
var context = canvas.getContext ( '2d' );

//CONSTS
var RIGHT_KEY_CODE = 68;
var LEFT_KEY_CODE = 65;
var UP_KEY_CODE = 87;
var DOWN_KEY_CODE = 83;

var TILE_COLORS = [ '#000000', '#000066', '#0000FF', '#33CCFF', '#FFFFFF', '#FF0066', '#FF9900', '#CDEFAB', '#FF0000'];
var TILE_SIZE = 5;
var WORLD_SIZE = 1000;
var TILES_IN_A_LINE = Math.floor ( WORLD_SIZE/TILE_SIZE );

var VIEW_WIDTH = 1000;
var VIEW_HEIGHT = 1000;
var VIEW_TILE_WIDTH = Math.floor ( VIEW_WIDTH / TILE_SIZE );
var VIEW_TILE_HEIGHT = Math.floor ( VIEW_HEIGHT / TILE_SIZE );

//INITIALIZATION
function seed(base, next, seeds, distance){
	console.log(distance);
	var height;
	if(next != 8){
		for(x = 0; x < seeds; x++){
			var row = Math.floor ((Math.random() * TILES_IN_A_LINE));
			var col = Math.floor ((Math.random() * TILES_IN_A_LINE));
			if(base == -1){
				height = true;
			}
			else
			{
				height = (tileGrid[row][col] == base);
			}
			if(height){
				tileGrid[row][col] = next;
			}
		}
	}
	else{
		var row = Math.floor ((Math.random() * TILES_IN_A_LINE));
		var col = Math.floor ((Math.random() * TILES_IN_A_LINE));
		if(base == -1){
				if(tileGrid[row][col] == 7){
					height = false;
				}
				else{
				height = true;
				}
		}
		else
		{
			height = (tileGrid[row][col] == base);
		}
		while(!height){
			row = Math.floor ((Math.random() * TILES_IN_A_LINE));
			col = Math.floor ((Math.random() * TILES_IN_A_LINE));
			if(base == -1){
				if(tileGrid[row][col] == 7){
					height = false;
				}
				else{
					height = true;
				}
			}
			else
			{
				height = (tileGrid[row][col] == base);
			}
		}
		tileGrid[row][col] = next;
	}
}

function sqrSeed(base, next, seeds, distance){
	console.log(distance);
	var height;
	if(next != 8){
		for(x = 0; x < seeds; x++){
			var row = Math.floor ((Math.random() * TILES_IN_A_LINE));
			var col = Math.floor ((Math.random() * TILES_IN_A_LINE));
			if(base == -1){
				height = true;
			}
			else
			{
				height = (tileGrid[row][col] == base);
			}
			if( height && (row < TILES_IN_A_LINE*distance || row > TILES_IN_A_LINE-TILES_IN_A_LINE*distance || col < TILES_IN_A_LINE*distance || col > TILES_IN_A_LINE-TILES_IN_A_LINE*distance)){
				tileGrid[row][col] = next;
			}
		}
	}
	else{
		var row = Math.floor ((Math.random() * TILES_IN_A_LINE));
		var col = Math.floor ((Math.random() * TILES_IN_A_LINE));
		if(base == -1){
				if(tileGrid[row][col] == 7){
					height = false;
				}
				else{
				height = true;
				}
		}
		else
		{
			height = (tileGrid[row][col] == base);
		}
		while(!(height && (row < TILES_IN_A_LINE*distance || row > TILES_IN_A_LINE-TILES_IN_A_LINE*distance || col < TILES_IN_A_LINE*distance || col > TILES_IN_A_LINE-TILES_IN_A_LINE*distance))){
			row = Math.floor ((Math.random() * TILES_IN_A_LINE));
			col = Math.floor ((Math.random() * TILES_IN_A_LINE));
			if(base == -1){
				height = true;
			}
			else
			{
				height = (tileGrid[row][col] == base);
			}
		}
		tileGrid[row][col] = next;
	}
}

function reverseSqrSeed(base, next, seeds, distance){
	console.log(distance);
	var height;
	if(next != 8){
		for(x = 0; x < seeds; x++){
			var row = Math.floor ((Math.random() * TILES_IN_A_LINE));
			var col = Math.floor ((Math.random() * TILES_IN_A_LINE));
			if(base == -1){
				height = true;
			}
			else
			{
				height = (tileGrid[row][col] == base);
			}
			if( height && !(row < TILES_IN_A_LINE*distance || row > TILES_IN_A_LINE-TILES_IN_A_LINE*distance || col < TILES_IN_A_LINE*distance || col > TILES_IN_A_LINE-TILES_IN_A_LINE*distance)){
				tileGrid[row][col] = next;
			}
		}
	}
	else{
		var row = Math.floor ((Math.random() * TILES_IN_A_LINE));
		var col = Math.floor ((Math.random() * TILES_IN_A_LINE));
		if(base == -1){
				if(tileGrid[row][col] == 7){
					height = false;
				}
				else{
				height = true;
				}
		}
		else
		{
			height = (tileGrid[row][col] == base);
		}
		while(!(height && (row < TILES_IN_A_LINE*distance || row > TILES_IN_A_LINE-TILES_IN_A_LINE*distance || col < TILES_IN_A_LINE*distance || col > TILES_IN_A_LINE-TILES_IN_A_LINE*distance))){
			row = Math.floor ((Math.random() * TILES_IN_A_LINE));
			col = Math.floor ((Math.random() * TILES_IN_A_LINE));
			if(base == -1){
				height = true;
			}
			else
			{
				height = (tileGrid[row][col] == base);
			}
		}
		tileGrid[row][col] = next;
	}
}

function sinSeed(base, next, y, a, b){
	var z = 0;
	var height = false; 
	for(x = 0; x < TILES_IN_A_LINE-1; x++){
		z = Math.round(a*Math.sin(b*x) + y);
		if(z < 0 || z >= TILES_IN_A_LINE)
		{
			console.log("out of bounds");
		}
		else{
			if(base == -1){
				height = true;
			}
			else{
				height = (tileGrid[x][z] == base);
			}
			if(height){
				tileGrid[x][z] = next;
			}
		}
	}
}

function cosSeed(base, next, y, a, b){
	var z = 0;
	var height = false; 
	for(x = 0; x < TILES_IN_A_LINE-1; x++){
		z = Math.round(a*Math.cos(b*x) + y);
		if(z < 0 || z >= TILES_IN_A_LINE)
		{
			console.log("out of bounds");
		}
		else{
			if(base == -1){
				height = true;
			}
			else{
				height = (tileGrid[x][z] == base);
			}
			if(height){
				tileGrid[x][z] = next;
			}
		}
	}
}

function tanSeed(base, next, y, a, b){
	var z = 0;
	var height = false; 
	for(x = 0; x < TILES_IN_A_LINE-1; x++){
		z = Math.round(a*Math.tan(b*x) + y);
		if(z < 0 || z >= TILES_IN_A_LINE)
		{
			console.log("out of bounds");
		}
		else{
			if(base == -1){
				height = true;
			}
			else{
				height = (tileGrid[x][z] == base);
			}
			if(height){
				tileGrid[x][z] = next;
			}
		}
	}
}

function cscSeed(base, next, y, a, b){
	var z = 0;
	var height = false; 
	for(x = 0; x < TILES_IN_A_LINE-1; x++){
		z = Math.round(a*(1/Math.sin(b*x)) + y);
		if(z < 0 || z >= TILES_IN_A_LINE)
		{
			console.log("out of bounds");
		}
		else{
			if(base == -1){
				height = true;
			}
			else{
				height = (tileGrid[x][z] == base);
			}
			if(height){
				tileGrid[x][z] = next;
			}
		}
	}
}

function secSeed(base, next, y, a, b){
	var z = 0;
	var height = false; 
	for(x = 0; x < TILES_IN_A_LINE-1; x++){
		z = Math.round(a*(1/Math.cos(b*x)) + y);
		if(z < 0 || z >= TILES_IN_A_LINE)
		{
			console.log("out of bounds");
		}
		else{
			if(base == -1){
				height = true;
			}
			else{
				height = (tileGrid[x][z] == base);
			}
			if(height){
				tileGrid[x][z] = next;
			}
		}
	}
}

function ctanSeed(base, next, y, a, b){
	var z = 0;
	var height = false; 
	for(x = 0; x < TILES_IN_A_LINE-1; x++){
		z = Math.round(a*(1/Math.tan(b*x)) + y);
		if(z < 0 || z >= TILES_IN_A_LINE)
		{
			console.log("out of bounds");
		}
		else{
			if(base == -1){
				height = true;
			}
			else{
				height = (tileGrid[x][z] == base);
			}
			if(height){
				tileGrid[x][z] = next;
			}
		}
	}
}

function build(base, next, chance, seeds, distance){
	seed(base, next, seeds, distance);
	if(chance > 0){
		for (x = 0; x < TILES_IN_A_LINE; x++ ) {
			for ( y = 0; y < TILES_IN_A_LINE; y++ ) {
	     		var num = Math.floor ( Math.random() * 100);
	        	if(tileGrid[x][y] == next){
	        		 if(num <= chance){
	        	 		tileGrid[x][y-1] = next;
	        	 		tileGrid[x][y+1] = next;
	        	 		if(x > 0){
	        	 			tileGrid[x-1][y] = next;
	        	 		}
	        	 		if(x != TILES_IN_A_LINE-1){
	        	 			tileGrid[x+1][y] = next;
	        	 		}
	        	 	}
	         	}
	     	}
		}
	
		for (x = TILES_IN_A_LINE-1; x > 0; x-- ) {
	    	 for ( y = TILES_IN_A_LINE-1; y > 0; y-- ) {
	     		var num = Math.floor ( Math.random() * 100);
	        	if(tileGrid[x][y] == next){
	        		 if(num <= chance){
	        	 		tileGrid[x][y-1] = next;
	        	 		tileGrid[x][y+1] = next;
	        	 		if(x > 0){
	        	 			tileGrid[x-1][y] = next;
	        	 		}
	        	 		if(x != TILES_IN_A_LINE-1){
	        	 			tileGrid[x+1][y] = next;
	        	 		}	
	        		 }
	        	 }
	    	 }
		}
	
		for (x = TILES_IN_A_LINE; x > 0; x-- ) {
	    	 for ( y = 0; y < TILES_IN_A_LINE-1; y++ ) {
	     		var num = Math.floor ( Math.random() * 100);
	        	if(tileGrid[y][x] == next){
	        		if(num <= chance){
	        	 		tileGrid[y][x-1] = next;
	        	 		tileGrid[y][x+1] = next;
	        	 		if(y > 0){
	        	 			tileGrid[y-1][x] = next;
	        	 		}
	        	 		if(y != TILES_IN_A_LINE-1){
	        	 			tileGrid[y+1][x] = next;
	        	 		}
	        	 	}
	         	}
	     	}
		}
	
		for (x = TILES_IN_A_LINE-1; x > 0; x-- ) {
	    	 for ( y = 0; y < TILES_IN_A_LINE; y++ ) {
	     		var num = Math.floor ( Math.random() * 100);
	        	if(tileGrid[x][y] == next){
	        		 if(num <= chance){
	        	 		tileGrid[x][y-1] = next;
	        	 		tileGrid[x][y+1] = next;
	        	 		if(x > 0){
	        	 			tileGrid[x-1][y] = next;
	        	 		}
	        	 		if(x != TILES_IN_A_LINE-1){
	        	 			tileGrid[x+1][y] = next;
	        	 		}
	        	 	}
	         	}
	     	}
		}
	}
}
var keysPressed = {};
keysPressed[RIGHT_KEY_CODE] = false;
keysPressed[LEFT_KEY_CODE] = false;
keysPressed[UP_KEY_CODE] = false;
keysPressed[DOWN_KEY_CODE] = false;

var playerX = WORLD_SIZE/2; //center
var playerY = WORLD_SIZE/2; //center

var tileGrid = [];
var tiles = [];
var w = 0;
var d = 0;
var m = 0;
var g = 0;
var t = 0;
for ( x = 0; x < TILES_IN_A_LINE; x++ ) {
    var collumn = new Array();
    for ( y = 0; y < TILES_IN_A_LINE; y++ ) {
    	collumn[y] = 0;
    }
    tileGrid[x] = collumn;
}

// for(x = 0; x < 10; x++){
	// var rowlength = Math.floor ((Math.random() * (TILES_IN_A_LINE - TILES_IN_A_LINE/10)));
	// var collength = Math.floor ((Math.random() * (TILES_IN_A_LINE - TILES_IN_A_LINE/10)));
	// var x = 0;
	// var left = 0;
	// var right = 0;
	// while(x < rowlength){
		// var num = Math.floor (Math.random() * 1.5);
		// if(num = 0)
	// }
// }

 /*build(0, 1, 55, 0, 1);
 build(1, 1, 30, 0, 1);
 build(1, 2, 50, 100, 1);
 build(2, 3, 50, 100, 1);
 build(3, 4, 40, 100, 1);
 build(4, 5, 5, 500, 1);
 build(3, 5, 0, 500, 1);
 build(0, 6, 5, 200, 1);
 build(1, 6, 0, 200, 1);
 build(2, 6, 0, 100, 1);
 build(2, 5, 0, 150, 1);
 build(-1, 7, 25, 1000000, .03);
 seed(-1, 8, 0, .3);*/

document.addEventListener ( 'keydown', keyDown, false );
document.addEventListener ( 'keyup', keyUp, false );
setInterval ( onEnterFrame, 1000 / 30 ); //30 FPS

function onEnterFrame() {
    if (keysPressed[RIGHT_KEY_CODE]) playerX = playerX + 2;
    if (keysPressed[LEFT_KEY_CODE]) playerX = playerX - 2;
    if (keysPressed[UP_KEY_CODE]) playerY = playerY - 2;
    if (keysPressed[DOWN_KEY_CODE]) playerY = playerY + 2; 
    
    var left = playerX - VIEW_WIDTH/2;
    var top = playerY - VIEW_HEIGHT/2;
    
    var leftTile = Math.floor ( left / TILE_SIZE );
    var topTile = Math.floor ( top / TILE_SIZE );
    
    var tileOffsetX = left % TILE_SIZE;
    var tileOffsetY = top % TILE_SIZE;
    
    //var playerLocalX = Math.floor ( playerX / TILE_SIZE ) + tileOffsetX;
    //var playerLocalY = Math.floor ( playerY / TILE_SIZE ) + tileOffsetY;
    context.clearRect(0, 0, canvas.width, canvas.height);

    for ( x = 0; x < VIEW_TILE_WIDTH; x++ ) {
        for ( y = 0; y < VIEW_TILE_HEIGHT; y++ ) {
            var tileColor = tileGrid[leftTile+x][topTile+y];
            context.fillStyle = TILE_COLORS[tileColor];
            context.fillRect ( x * TILE_SIZE - tileOffsetX, y * TILE_SIZE - tileOffsetY, TILE_SIZE, TILE_SIZE );
        }
    }
    
    context.fillStyle = '#000000';
    context.fillRect ( VIEW_WIDTH/2 - 10, VIEW_HEIGHT/2 - 10, 20, 20 );
    context.fillStyle = '#FFFFFF';
    context.fillRect ( VIEW_WIDTH/2 - 7, VIEW_HEIGHT/2 - 7, 14, 14);    

}

function keyDown(e) {
    if ( e.keyCode in keysPressed ) keysPressed[e.keyCode] = true;
}

function keyUp(e) {
    if ( e.keyCode in keysPressed ) keysPressed[e.keyCode] = false;
}

