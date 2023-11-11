function set_audio_speed(id, speed) {
    var audio = document.getElementById(id);
    audio.playbackRate = speed;
}

function fade_out (id, time, new_audio) {
	var audio = document.getElementById(id);
	var step = time * 10;
	
	var interval = setInterval(function() {set_volume(audio)}, step);
	setTimeout(function() {clear_interval(interval, audio, new_audio, id)}, ((time*1000) + 8));// id, new_audio)}, 1020);
}

function set_volume (audio) {
	audio.volume -= 0.01;
}

function clear_interval (interval, audio, new_audio, id) {
	clearInterval(interval);
	audio.volume = 0;
	ASLEvent('DestroyAudio', id);
	if (new_audio != null) {
		ASLEvent('PlayAudio', new_audio);
	}
	
}