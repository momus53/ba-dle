import {Nrocancion} from './main.js';
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
        audio = new Audio('audio/cancion'+Nrocancion+'/track2.mp3');
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
}