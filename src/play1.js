import {Nrocancion} from './main.js';
import { playAudio } from './audioManager.js';

let audio;

export function setupPlay1(element) {
    element.addEventListener('click', () => {
        if (!audio) {
            audio = new Audio('audio/cancion' + Nrocancion + '/track1.mp3');
        }
        playAudio(audio);
    });
}