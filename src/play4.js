export function setupPlay4(element) {
    element.addEventListener('click', () => play4())
}
let isPlaying = false;
let audio;

export function stop4() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
}
function play4() {
    if (!audio) {
        audio = new Audio('audio/cancion/Vocals.wav');
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
}