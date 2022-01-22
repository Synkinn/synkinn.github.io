keyQ = 0;
keyP = 0;
keypress =[[keyQ,player1],[keyP,player2]];

window.onkeydown = function(e){
	if(e.code == "KeyQ"){
		keyQ = 1;
	}
	
	if(e.code == "KeyP"){
		keyP = 1;
	}
}

window.onkeyup = function(e){
	if(e.code == "KeyQ"){
		keyQ = 0;
	}
	if(e.code == "KeyP"){
		keyP = 0;
	}
}

canvas.onclick = function(){canvas.requestFullscreen();}