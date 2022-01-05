player = {
	sprite: square,
	posx: 10,
	posy: 10,
	width: 50,
	height: 50,
	vel: 0
}

restartButton = {
	sprite: restartImage,
	posx: 600,
	posy: 150,
	width: 100,
	height: 100,
}


function beamMake(posx, posy){
	this.sprite = beam;
	this.initposx = posx;
	this.posx = this.initposx;
	this.posy = posy;
	this.width = 50;
	this.height = 400;
	this.scoreState = 1;
	this.gap = 150;
	this.topy = this.posy - this.height - this.gap;
	this.verts = [
		[this.posx,this.posy],
		[this.posx,this.posy + this.height],
		[this.posx + this.width ,this.posy],
		[this.posx + this.width, this.posy + this.height]
		];
}

function beamMakeTop(posx, posy){
	this.sprite = beam;
	this.initposx = posx;
	this.posx = this.initposx;
	this.posy = posy;
	this.width = 50;
	this.height = 400;
	this.scoreState = 1;
	this.gap = 100;
	this.topy = this.posy - this.height - this.gap;
	this.verts = [
		[this.posx,this.posy],
		[this.posx,this.posy + this.height],
		[this.posx + this.width ,this.posy],
		[this.posx + this.width, this.posy + this.height]
		];
}


function gravity(){
	player.vel = player.vel - 0.3;
}



function spawnBeams(){
	if (gameObjects[gameObjects.length - 1].posx < canvas.width){
		gameObjects[gameObjects.length] = new beamMake(gameObjects[gameObjects.length - 1].posx + dist, Math.floor(Math.random() * 200) + 150);
		gameObjects[gameObjects.length] = new beamMakeTop(gameObjects[gameObjects.length - 1].posx, gameObjects[gameObjects.length - 1].posy - gameObjects[gameObjects.length - 1].height - gameObjects[gameObjects.length - 1].gap);
	}
}




test = new beamMake(canvas.width/2,Math.floor(Math.random() * 200) + 150);
testTop = new beamMakeTop(test.posx, test.posy - test.height - test.gap);
gameObjects = [test, testTop];

function resetGameScene(){
	score = 0;
	loss = 0;
	player.vel = -3;
	player.posy = startpos;
	gameObjects = [test,testTop];
	for (i = 0; i < gameObjects.length; i++){
		gameObjects[i].scoreState = 1;
		gameObjects[i].posx = gameObjects[i].initposx;
	}
}

player.verts = [
[player.posx,player.posy],
[player.posx,player.posy + player.height],
[player.posx + player.width, player.posy],
[player.posx + player.width,player.posy + player.height]
]