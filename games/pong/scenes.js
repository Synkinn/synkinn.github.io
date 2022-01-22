function sceneSelect(){
	if (gameVars.scene == "menu"){
		menu();
	}
	if (gameVars.scene == "game"){
		game();
	}
}


function menu(){
	if (keyQ == 1){
		gameVars.menuQ = 1;
		}
	if (keyP == 1){		
		gameVars.menuP = 1;
	}
	
	if (gameVars.menuQ == 1){console.log("player1: ready"); gameVars.ready1 = "ready"}
	if (gameVars.menuP == 1){console.log("player2: ready"); gameVars.ready2 = "ready"}
	ctx.font = "30px Courier New";
	ctx.fillStyle = "#00FFFF";
	ctx.fillText("Player-1: " + gameVars.ready1 ,50 * cent, 50 * cent);
	ctx.fillText("Player-2: " + gameVars.ready2 ,50 * cent, 80 * cent);
	ctx.fillStyle = "#FFAAFF";
	ctx.fillText(gameVars.winner ,50 * cent, 110 * cent);
	ctx.fillText("Player-1: " +  gameVars.p1Score + " || Player-2: " +  gameVars.p2Score,50 * cent, 140 * cent);
	if((gameVars.menuP == 1)&&(gameVars.menuQ == 1)){
		dling.play();
		gameVars.menuP = 0;
		gameVars.menuQ = 0;
		gameVars.p1Score = 0;
		gameVars.p2Score = 0;
		gameVars.ready1 = "waiting";
		gameVars.ready2 = "waiting";
		gameVars.winner = "";
		
		gameVars.scene = "game";
		
	}
	
}

function game(){
	
	drawObjs(objects);
	ctx.fillStyle = "#AAAAFF";
	ctx.fillText("Player-1: " +  gameVars.p1Score + " || Player-2: " +  gameVars.p2Score,100 * cent, 50 * cent);
	if (gameVars.hitLeft == 1){
		gameVars.red = 10;
		gameVars.p2Score++;
	}
	if (gameVars.hitRight == 1){
		gameVars.red = 10;
		gameVars.p1Score++;
	}
	if (gameVars.p2Score >= gameVars.maxScore - 1){
		objects[0].color = "#FF8888";
	}
	if (gameVars.p1Score >= gameVars.maxScore - 1){
		objects[1].color = "#FF8888";
	}
	if (gameVars.p2Score >= gameVars.maxScore){
		objects[0].color = "#AAAAFF";
		objects[1].color = "#AAAAFF";
		gameVars.p1Loss = 1;
		gameVars.winner = "Winner: Player-2";
		gameVars.scene = "menu";
		
	}
	if (gameVars.p1Score >= gameVars.maxScore){
		objects[0].color = "#AAAAFF";
		objects[1].color = "#AAAAFF";
		gameVars.p2Loss = 1;
		gameVars.winner = "Winner: Player-1";
		gameVars.scene = "menu";
		
	}
	
}