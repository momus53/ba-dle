import {Nrocancion} from './main.js';
import { playAudio } from './audioManager.js';

let audio;

export function setupPlay2(element) {
    element.addEventListener('click', () => {
        if (!audio) {
            audio = new Audio('audio/cancion' + Nrocancion + '/track2.mp3');
        }
        playAudio(audio);
    });
}