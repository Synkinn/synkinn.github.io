mouseState = 0;
mouseClick = 0;
wind = document.getElementById("outerdiv");

canvas.onmousedown = function(){
	mouseState = 1;
	wind.requestFullscreen();
}

canvas.onmouseup = function(){
	mouseState = 0;
}

onmousemove = function(e){
	const rect = canvas.getBoundingClientRect();
	mousex = e.clientX - rect.left;
	mousey = e.clientY - rect.top;
}


//mobile stuff

canvas.ontouchstart = function(){
	mouseState = 1;
}

canvas.ontouchend = function(){
	mouseState = 0;
}