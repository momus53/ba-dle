import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupSkip } from './skip.js'
import { setupGuess } from './guess.js'
import { setupPlay1, stop1} from './play1.js'
import { setupPlay2, stop2 } from './play2.js'
import { setupPlay3, stop3 } from './play3.js'
import { setupPlay4, stop4} from './play4.js'


const suggestions = document.getElementById('suggestions');
const textInput = document.getElementById('textInput');

textInput.addEventListener('input', () => {
  const query = textInput.value.toLowerCase();
  if (query.length > 0) {
    // Example suggestions, replace with your own logic
    const exampleSuggestions = ['Intento - Ulises Bueno', 'Otra Canción - Otro Artista', 'Más Canciones - Más Artistas'];
    const filteredSuggestions = exampleSuggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
    suggestions.innerHTML = filteredSuggestions.map(suggestion => `<div class="suggestion-item">${suggestion}</div>`).join('');
    suggestions.style.display = 'block';
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



let cancion = "Intento";
let artista = "Ulises Bueno";



let pista = 0; // 0-6 indica en que pista esta actualmente el usuario
document.querySelector('#skip').addEventListener('click', () => {
  if (pista < 6) {
    pista++;
    console.log(pista);
    switch (pista) {
      case 1:
        document.getElementById('card6').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card1').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card6').style.border='';
        document.getElementById('play1').disabled = false;
        break;
      case 2:
        document.getElementById('card1').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card2').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card1').style.border='';
        document.getElementById('play2').disabled = false;
        stop1();
        break;
      case 3:
        document.getElementById('card2').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card3').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card2').style.border='';
        document.getElementById('play3').disabled = false;
        stop2();
        break;
      case 4:
        document.getElementById('card3').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card4').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card3').style.border='';
        document.getElementById('play4').disabled = false;
        stop3();
        break;
      case 5:
        document.getElementById('card4').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card5').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card4').style.border='';
        document.getElementById('pista5').innerText= "Pista 5: PRUEBA";
        stop4();
        break;
      case 6:
        document.getElementById('card5').style.backgroundColor = 'rgb(145, 6, 6)';
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
    }else{
      document.getElementById('card'+pista).style.backgroundColor = 'rgb(11, 145, 6)';
    }

    document.querySelector('#skip').style.visibility = 'hidden';
    document.querySelector('#guess').style.visibility = 'hidden';
    document.querySelector('#texto').style.visibility = 'hidden';
  } else {
    pista++;
    console.log(pista);
    switch (pista) {
      case 1:
        alert("Incorrecto. Intenta con la siguiente pista.");
        document.getElementById('card6').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card1').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card6').style.border='';
        document.getElementById('play1').disabled = false;
        break;
      case 2:
        alert("Incorrecto. Intenta con la siguiente pista.");
        document.getElementById('card1').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card2').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card1').style.border='';
        document.getElementById('play2').disabled = false;
        stop1();
        break;
      case 3:
        alert("Incorrecto. Intenta con la siguiente pista.");
        document.getElementById('card2').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card3').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card2').style.border='';
        document.getElementById('play3').disabled = false;
        stop2();
        break;
      case 4:
        alert("Incorrecto. Intenta con la siguiente pista.");
        document.getElementById('card3').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card4').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card3').style.border='';
        document.getElementById('play4').disabled = false;
        stop3();
        break;
      case 5:
        alert("Incorrecto. Intenta con la siguiente pista.");
        document.getElementById('card4').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card5').style.border='2px solid rgba(0, 40, 218, 0.5)';
        document.getElementById('card4').style.border='';
        document.getElementById('pista5').innerText= "Pista 5: PRUEBA";
        stop4();
        break;
      case 6:
        alert("Incorrecto. Has perdido :c");
        document.getElementById('card5').style.backgroundColor = 'rgb(145, 6, 6)';
        document.getElementById('card5').style.border='';
        document.getElementById('win1').innerText = "Perdiste, La canción era: ";
        document.getElementById('win2').innerText = cancion + " - " + artista;
        break;
      default:
        break;
    }
  }
});
// Create the modal element
const modal = document.createElement('div');
modal.id = 'infoModal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1000';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0,0,0,0.4)';

// Modal content
const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fefefe';
modalContent.style.margin = '15% auto';
modalContent.style.padding = '20px';
modalContent.style.border = '1px solid #888';
modalContent.style.width = '80%';
modalContent.style.borderRadius = '10px';

const closeButton = document.createElement('span');
closeButton.innerHTML = '&times;';
closeButton.style.color = '#aaa';
closeButton.style.float = 'right';
closeButton.style.fontSize = '28px';
closeButton.style.fontWeight = 'bold';
closeButton.style.cursor = 'pointer';

closeButton.onclick = function() {
  modal.style.display = 'none';
};

const modalText = document.createElement('p');
modalText.innerText = 'Información sobre el juego...';

modalContent.appendChild(closeButton);
modalContent.appendChild(modalText);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Show modal when "?" button is clicked
document.getElementById('rightButton').addEventListener('click', () => {
  modal.style.display = 'block';
});

// Hide modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

getElementById('play1').disabled = true;
