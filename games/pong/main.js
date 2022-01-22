window.onload = function(){main();}

scene = "menu"
menuQ = 0;
menuP = 0;
ready1 = "waiting";
ready2 = "waiting";

function main(){
	
	setTimeout(function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		keypress =[[keyQ,player1],[keyP,player2]];
		
		sceneSelect();
		requestAnimationFrame(main);
		
	},1000/fps)
}


