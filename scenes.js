function scene(){
	if (currentScene == 0){menu()}
	if (currentScene == 1){game()}
	if (currentScene == 2){lossScene()}
}





function menu(){
	
	
}

function game(){
	spawnBeams();
	for (i = 0; i < gameObjects.length; i++){
		beamCheck(i);
		if ((gameObjects[i].scoreState == 1)&&(player.posx >= gameObjects[i].posx)){
			score = score + 0.5;
			gameObjects[i].scoreState = 0;
		}
		drawItem(gameObjects[i]);
		//drawItemTop(gameObjects[i]);
		gameObjects[i].posx = gameObjects[i].posx - speed;
	}
	if (mouseState == 1){player.vel = player.vel + 1}
	gravity();
	player.posy = player.posy - player.vel;
	drawItem(player);
	//printBodyText(`${score}`,canvas.width/2, 30, "FFA500");
	printText(`${score}`, 25, 30, "FFA500", "30px", "Georgia");
	lossCheck();
	if (loss == 1){
		currentScene = 2
	}
}

function lossScene(){
	for (i = 0; i < gameObjects.length; i++){
		drawItem(gameObjects[i]);
		//drawItemTop(gameObjects[i]);
	}
	drawItem(player);
	printText("Game Over", 20 , 150, "FFA500", "100px", "Georgia");
	printText(`Score: ${score}`, 20,  300, "FFA500", "100px", "Georgia");
	drawItem(restartButton);
	if ((mouseState == 1)&&(mousex >= restartButton.posx)&&(mousex <= restartButton.posx + restartButton.width)&&(mousey <= restartButton.posy + restartButton.height)&&(mousey >= restartButton.posy)){
		resetGameScene();
		currentScene = 1;
	}
}