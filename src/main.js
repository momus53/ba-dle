import './style.css'
import { setupSkip } from './skip.js'
import { setupGuess } from './guess.js'
import { setupPlay1, stop1} from './play1.js'
import { setupPlay2, stop2 } from './play2.js'
import { setupPlay3, stop3 } from './play3.js'
import { setupPlay4, stop4} from './play4.js'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
export {Nrocancion}

const suggestions = document.getElementById('suggestions');
const textInput = document.getElementById('textInput');

const canciones = ['Intento', 'Perfecta','El anillo del capitán Beto'];//, 'cancion4', 'cancion5', 'cancion6', 'cancion7'];
const artistas = ['Ulises Bueno', 'Miranda!','Invisible'];//, 'artista4', 'artista5', 'artista6', 'artista7'];
const pistas0 = ['Año: 2017 | Visitas en YouTube: 16M', 'Año: 2007 | Visitas en YouTube: 420M', 'Año: 1976 | Visitas en YouTube: 3.8M','Año: 2002 | Visitas en YouTube: 10M', 'Pista 5: PRUEBA', 'Pista 6: PRUEBA'];
const pistas5 = ['PRUEBA', 'IMPECABLE', 'CAPITAN', 'TESORO', 'P4RUEBA', 'P5RUEBA'];

textInput.addEventListener('input', () => {
  const query = textInput.value.toLowerCase();
  if (query.length > 0) {
    // Example suggestions, replace with your own logic
    const exampleSuggestions = ['Intento - Ulises Bueno', 'Perfecta - Miranda!', 'El anillo del capitán Beto - Invisible', 'cancion4 - artista4', 'cancion5 - artista5', 'cancion6 - artista6', 'cancion7 - artista7'];
    const filteredSuggestions = exampleSuggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
    suggestions.innerHTML = filteredSuggestions.map(suggestion => `<div class="suggestion-item">${suggestion}</div>`).join('');
    suggestions.style.display = 'block';
    suggestions.style.color = 'white';
    suggestions.style.backgroundColor='rgb(15, 15, 15)';
  } else {
    suggestions.style.display = 'none';
  }
});

suggestions.addEventListener('click', (event) => {
  if (event.target.classList.contains('suggestion-item')) {
    textInput.value = event.target.innerText;
    suggestions.style.display = 'none';
  }
});

setupSkip(document.querySelector('#skip'))
setupGuess(document.querySelector('#guess'))
setupPlay1(document.querySelector('#play1'))
setupPlay2(document.querySelector('#play2'))
setupPlay3(document.querySelector('#play3'))
setupPlay4(document.querySelector('#play4'))

let aux = Math.floor(Math.random() * canciones.length);
let cancion = canciones[aux];
let artista = artistas[aux];
let Nrocancion = aux+1;
document.getElementById('pistaYT').innerText= pistas0[aux];



let pista = 0; // 0-6 indica en que pista esta actualmente el usuario
document.querySelector('#skip').addEventListener('click', () => {
  if (pista < 6) {
    pista++;
    console.log(pista);
    switch (pista) {
      case 1:
        document.getElementById('card6').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card1').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card6').style.border='';
        document.getElementById('play1').disabled = false;
        break;
      case 2:
        document.getElementById('card1').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card2').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card1').style.border='';
        document.getElementById('play2').disabled = false;
        stop1();
        break;
      case 3:
        document.getElementById('card2').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card3').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card2').style.border='';
        document.getElementById('play3').disabled = false;
        stop2();
        break;
      case 4:
        document.getElementById('card3').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card4').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card3').style.border='';
        document.getElementById('play4').disabled = false;
        stop3();
        break;
      case 5:
        document.getElementById('card4').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card5').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card4').style.border='';
        document.getElementById('pista5').innerText= "Pista 5: "+pistas5[aux];
        stop4();
        break;
      case 6:
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟥🟥🟥🟥🟥</p>'
        document.getElementById('card5').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card5').style.border='';
        document.getElementById('win1').innerText = "Perdiste, La canción era: ";
        document.getElementById('win2').innerText = cancion + " - " + artista;
        document.querySelector('#skip').style.visibility = 'hidden';
        document.querySelector('#guess').style.visibility = 'hidden';
        document.querySelector('#texto').style.visibility = 'hidden';
        break;
      default:
        break;
    }
  }
});
document.querySelector('#guess').addEventListener('click', () => {
  const userGuess = document.querySelector('#textInput').value.toLowerCase();
  const correctAnswer = `${cancion.toLowerCase()} - ${artista.toLowerCase()}`;
  if (userGuess === correctAnswer) {
    document.getElementById('win1').innerText = "¡Ganaste! La canción es:";
    document.getElementById('win2').innerText = `${cancion} - ${artista}`;
    if(pista == 0){
      document.getElementById('card6').style.backgroundColor = 'rgb(11, 145, 6)';
      document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟩⬜⬜⬜⬜⬜</p>';
    }else{
      document.getElementById('card'+pista).style.backgroundColor = 'rgb(11, 145, 6)';
    }
    document.getElementById('play1').disabled = false;
    document.getElementById('play2').disabled = false;
    document.getElementById('play3').disabled = false;
    document.getElementById('play4').disabled = false;
    document.querySelector('#skip').style.visibility = 'hidden';
    document.querySelector('#guess').style.visibility = 'hidden';
    document.querySelector('#texto').style.visibility = 'hidden';
    switch (pista) {
      case 1:
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟩⬜⬜⬜⬜</p>';
        break;
      case 2:
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟥🟩⬜⬜⬜</p>';
        break;
      case 3:
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟥🟥🟩⬜⬜</p>'; 
        break;
      case 4:
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟥🟥🟥🟩⬜</p>';
        break;
      case 5:
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟥🟥🟥🟥🟩</p>';
        break;
      default:
        break;
    }
  } else {
    pista++;
    console.log(pista);
    switch (pista) {
      case 1:
        toast.show()
        document.getElementById('card6').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card1').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card6').style.border='';
        document.getElementById('play1').disabled = false;
        break;
      case 2:
        toast.show()
        document.getElementById('card1').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card2').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card1').style.border='';
        document.getElementById('play2').disabled = false;
        stop1();
        break;
      case 3:
        toast.show()
        document.getElementById('card2').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card3').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card2').style.border='';
        document.getElementById('play3').disabled = false;
        stop2();
        break;
      case 4:
        toast.show()
        document.getElementById('card3').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card4').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card3').style.border='';
        document.getElementById('play4').disabled = false;
        stop3();
        break;
      case 5:
        toast.show()
        document.getElementById('card4').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card5').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card4').style.border='';
        document.getElementById('pista5').innerText= "Pista 5: "+pistas5[aux];
        stop4();
        break;
      case 6:
        alert("Incorrecto. Has perdido :c");
        document.getElementById('card5').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card5').style.border='';
        document.getElementById('win1').innerText = "Perdiste, La canción era: ";
        document.getElementById('win2').innerText = cancion + " - " + artista;
        document.getElementById('compartir').innerHTML = '<p>Bandle #947 3/6</p> <p>🟥🟥🟥🟥🟥🟥</p>'
        break;
      default:
        break;
    }
  }
});
const toastLiveExample = document.getElementById('liveToast')
const toastCopy = document.getElementById('copyToast')
const toast = new bootstrap.Toast(toastLiveExample)
const toast1 = new bootstrap.Toast(toastCopy)



document.querySelector('#compartirbtn').addEventListener('click', () => {
  const contentToCopy = document.querySelector('#compartir').innerText;
  navigator.clipboard.writeText(contentToCopy).then(() => {
    toast1.show()
  }).catch(err => {
    console.error('Failed to copy content: ', err);
  });
});