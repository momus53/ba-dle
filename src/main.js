import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupSkip } from './skip.js'
import { setupGuess } from './guess.js'
import { setupPlay1, stop1} from './play1.js'
import { setupPlay2, stop2 } from './play2.js'
import { setupPlay3, stop3 } from './play3.js'
import { setupPlay4, stop4} from './play4.js'




document.querySelector('#app').innerHTML = `
  <div>
    <div style="display: flex; align-items: center; justify-content: space-between; margin-top:-30px;">
      <button id="leftButton" type="button" style="border-radius: 30px">x</button>
      <h1>Bañdle</h1>
      <button id="rightButton" type="button" style="border-radius: 30px">?</button>
    </div>
    
    <div class="card" id="card6" style="border-radius: 30px; background-color:rgba(240, 240, 240, 0.4); margin-bottom: 5px; height: 1px; display: flex; align-items: center; justify-content: space-between; border: 2px solid rgba(0, 40, 218, 0.5);">
      <p id="pista6" style="margin-left: 10px;">Año: 2017 | Visitas en YouTube: 16M</p>
    </div>

    <div class="card" id="card1" style="border-radius: 30px; background-color:rgba(240, 240, 240, 0.18); margin-bottom: 5px; height: 1px; display: flex; align-items: center; justify-content: space-between;">
      <p id="pista1" style="margin-left: 10px;">Pista 1: Bajo</p>
      <button id="play1" type="button" style="border-radius: 30px; background-color: white; margin-right: -25px;" disabled>
        <img src="play-icon.svg" alt="Play Icon" style="width: 35px; height: 35px;">
      </button>
    </div>
    <div class="card" id="card2" style="border-radius: 30px; background-color:rgba(240, 240, 240, 0.18); margin-bottom: 5px; height: 1px; display: flex; align-items: center; justify-content: space-between;">
      <p id="pista2" style="margin-left: 10px;">Pista 2: Percusión</p>
      <button id="play2" type="button" style="border-radius: 30px; background-color: white; margin-right: -25px;" disabled>
        <img src="play-icon.svg" alt="Play Icon" style="width: 35px; height: 35px;">
      </button>
    </div>
    <div class="card" id="card3" style="border-radius: 30px; background-color:rgba(240, 240, 240, 0.18); margin-bottom: 5px; height: 1px; display: flex; align-items: center; justify-content: space-between;">
      <p id="pista3" style="margin-left: 10px;">Pista 3: Piano + Guitarra</p>
      <button id="play3" type="button" style="border-radius: 30px; background-color: white; margin-right: -25px;" disabled>
        <img src="play-icon.svg" alt="Play Icon" style="width: 35px; height: 35px;">
      </button>
    </div>
    <div class="card" id="card4" style="border-radius: 30px; background-color:rgba(240, 240, 240, 0.18); margin-bottom: 5px; height: 1px; display: flex; align-items: center; justify-content: space-between;">
      <p id="pista4" style="margin-left: 10px;">Pista 4: Voces</p>
      <button id="play4" type="button" style="border-radius: 30px; background-color: white; margin-right: -25px;" disabled>
        <img src="play-icon.svg" alt="Play Icon" style="width: 35px; height: 35px;">
      </button>
    </div>
    <div class="card" id="card5" style="border-radius: 30px; background-color:rgba(240, 240, 240, 0.18); margin-bottom: 5px; height: 1px; display: flex; align-items: center; justify-content: space-between;">
      <p id="pista5" style="margin-left: 10px;">Pista 5: Pista del nombre o algo</p>
    </div>

    <div id="texto" class="card" style="border-radius: 30px; margin-top: -10px;margin-left: -15px;">
      <input type="text" id="textInput" placeholder="¿Que canción es?¿Que artista es?" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
      <div id="suggestions" style="border: 1px solid #ccc; border-radius: 5px; display: none; position: absolute; background-color: white; z-index: 1000;">
        <!-- Suggestions will be inserted here -->
      </div>
    </div>

    <div class="card" style="border-radius:0px; margin-top: -80px;">
      <h3 id="win1"></h3>
      <h3 id="win2"></h3>
    </div>

    <div class="button-container" style="margin-top: -40px;">
      <div class="card" style="border-radius: 10px;">
        <button id="skip" type="button"></button>
      </div>
      <div class="card" style="border-radius: 10px;">
        <button id="guess" type="button"></button>
      </div>
    </div>
    <p class="read-the-docs">
      mis sitios web etc
    </p>
  </div>
`

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
