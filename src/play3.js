export function setupPlay3(element) {
    element.addEventListener('click', () => play3())
}
let isPlaying = false;
let audio;

export function stop3() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
}
function play3() {
    if (!audio) {
        audio = new Audio('audio/cancion/Piano+Strings.mp3');
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
}