export function setupPlay2(element) {
    element.addEventListener('click', () => play2())
}
let isPlaying = false;
let audio;

export function stop2() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
}
function play2() {
    if (!audio) {
        audio = new Audio('audio/cancion/Drums.mp3');
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
}