import {Nrocancion} from './main.js';
import { playAudio } from './audioManager.js';

let audio;

export function setupPlay4(element) {
    element.addEventListener('click', () => {
        if (!audio) {
            audio = new Audio('audio/cancion' + Nrocancion + '/track4.mp3');
        }
        playAudio(audio);
    });
}