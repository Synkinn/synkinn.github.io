border = {
	width: 1 * cent,
	height: 1 * cent,
	size: 10 * cent,
	color: "#AAFFFF"
}

function player(posx, posy,vely,reflect){
	this.posx = posx * cent;
	this.posy = posy * cent;
	this.width = 40 * cent;
	this.height = 100 * cent;
	this.vely = vely * cent;
	this.velx = 0;
	this.reflectBot = 0;
	this.gravity = 1;
	this.reflect = reflect;
	this.color = "#AAAAFF";
}


function ball(startPosx,startPosy, startVelx,startVely){
	this.posx = startPosx * cent;
	this.posy = startPosy * cent;
	this.velx = startVelx * cent;
	this.vely = startVely * cent;
	this.width = 50 * cent;
	this.height = 50 * cent;
	this.reflectBot = 1;
	this.gravity = 0;
	this.color = "#AAFFFF";
}

player1 = new player(10,10,0,1);
player2 = new player(950,10,0,-1);
mball = new ball(450,450,20,20);

objects = [player1,player2,mball]
balls = [mball];
gravityObjs = [player1, player2];
balls = [mball];
players = [player1,player2];

function drawObjs(objects){
	keyPress(keypress);
	for (let i = 0; i < objects.length; i++){
		drawObj(objects[i]);
		reflectVel(objects[i]);
		
		applyVel(objects[i]);
	}
	gravity(objects);
	bound(players,balls);
	//keyPress(keypress);
	drawBorder(border);
}

function drawObj(object){
	ctx.fillStyle = object.color;
	ctx.fillRect(object.posx,object.posy, object.width, object.height);
}


function drawBorder(border){
	if (gameVars.red > 0){
		ctx.fillStyle = "#FF8888";
		gameVars.red--;
	}else{ctx.fillStyle = border.color;}
	ctx.fillRect(0,0, canvas.width, border.size);
	ctx.fillRect(0,0, border.size, canvas.height);
	ctx.fillRect(canvas.width - border.size,0, border.size, canvas.height);
	ctx.fillRect(0,canvas.height - border.size, canvas.width, border.size);
}