function applyVel(object){
	object.posx = object.posx + object.velx;
	object.posy = object.posy + object.vely;
}

function reflectVel(object){
	gameVars.hitLeft = 0;
	gameVars.hitRight = 0;
	if ((object.posy + object.height >= canvas.height  )&&(object.reflectBot == 1)){
		object.vely = 0 - object.vely;
	}
	if ((object.posy  <= 0 )&&(object.vely < 0)){
		object.vely = 0 - object.vely;
		
	}
	if ((object.posx + object.width >= canvas.width  )&&(object.velx > 0)){
		object.velx = 0 - object.velx;
		gameVars.hitRight = 1;
	}
	if ((object.posx  <= 0 )&&(object.velx < 0)){
		object.velx = 0 - object.velx;
		gameVars.hitLeft = 1;
	}
	if ((object.posy + object.height >= canvas.height  )&&(object.reflectBot == 0)){
		object.gravity = 0;
		if(object.vely > 0){object.vely = 0;}
	}
	if ((object.posy + object.height <= canvas.height  )&&(object.reflectBot == 0)){
		object.gravity = 1;
	}
}

function gravity(object){
	for (let i = 0; i < object.length; i++){
		if (object[i].gravity == 1){
			object[i].vely = object[i].vely + 4;
		}
	}
}

function keyPress(keypress){
	for (let i = 0; i < keypress.length; i++){
		
		//console.log(keypress[i][0]);
		if (keypress[i][0] == 1){
			
			keypress[i][1].vely = keypress[i][1].vely - 8;
			
		}
		
	}
}


function bound(players,balls){
	for (let i = 0; i < players.length; i++){
		for (let i2 = 0; i2 < balls.length; i2++){
			if (((balls[i2].posx > players[i].posx)
				&&(balls[i2].posx < players[i].posx + players[i].width)
				&&(balls[i2].posy > players[i].posy)
				&&(balls[i2].posy < players[i].posy + players[i].height)
				)
				||((balls[i2].posx + balls[i2].width > players[i].posx)
				&&(balls[i2].posx + balls[i2].width < players[i].posx + players[i].width)
				&&(balls[i2].posy > players[i].posy)
				&&(balls[i2].posy < players[i].posy + players[i].height)
				)
				||((balls[i2].posx > players[i].posx)
				&&(balls[i2].posx < players[i].posx + players[i].width)
				&&(balls[i2].posy + balls[i2].height> players[i].posy)
				&&(balls[i2].posy + balls[i2].height< players[i].posy + players[i].height)
				)
				||((balls[i2].posx + balls[i2].width > players[i].posx)
				&&(balls[i2].posx + balls[i2].width < players[i].posx + players[i].width)
				&&(balls[i2].posy + balls[i2].height> players[i].posy)
				&&(balls[i2].posy + balls[i2].height< players[i].posy + players[i].height)
				)
				){
					if ((players[i].reflect == 1)&&(balls[i2].velx < 0)){ 
						balls[i2].velx = 0 - balls[i2].velx;
						//console.log("worked")
					}
					else if ((players[i].reflect == -1)&&(balls[i2].velx > 0)){ 
						balls[i2].velx = 0 - balls[i2].velx;
						//console.log("worked2")
					}
				}
		}
	}
}