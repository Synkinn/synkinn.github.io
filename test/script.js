window.onload = function(){main()}
function main(){
	var sound = new Howl({
		src: ['maybejaz.wav']
	});
	sound.play();
}