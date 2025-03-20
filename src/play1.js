export function setupPlay1(element) {
    element.addEventListener('click', () => play1())
}
let isPlaying = false;
let audio;

export function stop1() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
}
function play1() {
    if (!audio) {
        audio = new Audio('audio/cancion/Bass.mp3');
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
}