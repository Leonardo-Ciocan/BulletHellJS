var gameLoop;
var player;
var context;
var cnv;

function init(){
	
	cnv = document.getElementById("root");
	player = new Player(playerSize,cnv);

	document.documentElement.onkeydown= function(e){
		if(e.keyCode== "37"){
			keys.left.pressed=true;
		}
		else if(e.keyCode== "38"){
			keys.up.pressed=true;
		}
		else if(e.keyCode== "39"){
			keys.right.pressed=true;
		}
		else if(e.keyCode== "40"){
			keys.down.pressed=true;
		}
		else if(e.keyCode== "90"){
			keys.shoot.pressed=true;
		}
	};

	document.documentElement.onkeyup= function(e){
		if(e.keyCode== "37"){
			keys.left.pressed=false;
		}
		else if(e.keyCode== "38"){
			keys.up.pressed=false;
		}
		else if(e.keyCode== "39"){
			keys.right.pressed=false;
		}
		else if(e.keyCode== "40"){
			keys.down.pressed=false;
		}
		else if(e.keyCode== "90"){
			keys.shoot.pressed=false;
		}
	};


	context = cnv.getContext("2d");
	//player.draw();
	gameLoop = setInterval(loop , 15);	
}