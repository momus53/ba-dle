let currentAudio = null;

export function playAudio(audio) {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reinicia el audio detenido
    }

    if (audio.paused) {
        audio.play();
        currentAudio = audio;
    } else {
        audio.pause();
        currentAudio = null;
    }
}

export function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reinicia el audio detenido
        currentAudio = null;
    }
}