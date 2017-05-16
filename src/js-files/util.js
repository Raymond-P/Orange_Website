

function playSound(sound){
    var music = document.getElementById(sound);
    music.play();
}

function stopSound(sound){
	var music = document.getElementById(sound);
	music.pause();
	music.currentTime = 0;
}

function pauseOnClick(sound){
    var music = document.getElementById(sound);
    music.pause();
    
}