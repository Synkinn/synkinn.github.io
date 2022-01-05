function lossCheck(){
	if (player.posy + player.height >= canvas.height){
		loss = 1;
		//currentScene == 2;
	}
	if (player.posy  <= 0){
		loss = 1;
		//currentScene == 2;
	}
	//console.log(player.posy + player.height);
}

function beamCheck(i){
	if	(
		(player.posx >= gameObjects[i].posx)
		&&(player.posx <= gameObjects[i].posx + gameObjects[i].width)
		&&(player.posy >= gameObjects[i].posy)
		&&(player.posy <= gameObjects[i].posy + gameObjects[i].height)
		){
			loss = 1;	
		}
	if	(
		(player.posx + player.width >= gameObjects[i].posx)
		&&(player.posx + player.width <= gameObjects[i].posx + gameObjects[i].width)
		&&(player.posy  >= gameObjects[i].posy)
		&&(player.posy <= gameObjects[i].posy + gameObjects[i].height)
		){
			loss = 1;	
		}
	if	(
		(player.posx >= gameObjects[i].posx)
		&&(player.posx <= gameObjects[i].posx + gameObjects[i].width)
		&&(player.posy + player.height >= gameObjects[i].posy)
		&&(player.posy + player.height <= gameObjects[i].posy + gameObjects[i].height)
		){
			loss = 1;	
		}
	if	(
		(player.posx + player.width >= gameObjects[i].posx)
		&&(player.posx + player.width <= gameObjects[i].posx + gameObjects[i].width)
		&&(player.posy + player.height >= gameObjects[i].posy)
		&&(player.posy + player.height <= gameObjects[i].posy + gameObjects[i].height)
		){
			loss = 1;	
		}
	
}