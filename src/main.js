import { setupSkip } from './skip.js'
import { setupGuess } from './guess.js'
import { setupPlay1} from './play1.js'
import { setupPlay2} from './play2.js'
import { setupPlay3} from './play3.js'
import { setupPlay4} from './play4.js'
import { playAudio, stopAudio } from './audioManager.js'
import { playConfetti } from './confetti.js'
export {Nrocancion}

const suggestions = document.getElementById('suggestions');
const textInput = document.getElementById('textInput');
const currentDate = new Date().toLocaleDateString();
let audioL = null;
audioL = new Audio('./public/audio/negative_beeps-6008.mp3');

// Obtener canciones desde el backend
/*fetch('http://localhost:3000/canciones')
    .then((response) => response.json())
    .then((data) => {
        console.log('Canciones desde la base de datos:', data);
        // Puedes usar los datos para actualizar tu lógica
    })
    .catch((error) => {
        console.error('Error al obtener las canciones:', error);
    });
*/
const canciones = ['Intento', 'Perfecta','El anillo del capitán Beto','Malamente'];//, 'cancion4', 'cancion5', 'cancion6', 'cancion7'];
const artistas = ['Ulises Bueno', 'Miranda!','Invisible','Rosalia'];//, 'artista4', 'artista5', 'artista6', 'artista7'];
const pistas0 = ['Año: 2017 | Visitas en YouTube: 16M'
               , 'Año: 2007 | Visitas en YouTube: 420M'
               , 'Año: 1976 | Visitas en YouTube: 3.8M'
                ,'Año: 2018 | Visitas en YouTube: 167M'
                , 'Pista 5: PRUEBA'
                , 'Pista 6: PRUEBA'];
const pistas1 = ['Bajo', 'Percusión','Bajo','Percusión'];//, 'cancion4', 'cancion5', 'cancion6', 'cancion7'];
const pistas2 = ['Percusión', 'Bajo','Percusión','Bajo'];//, 'artista4', 'artista5', 'artista6', 'artista7'];
const pistas3 = ['Piano+Violin', 'Piano+Sintetizador','Guitarra+Sintetizador','Sintetizador'];//, 'cancion4', 'cancion5', 'cancion6', 'cancion7'];
const pistas4 = ['Voces','Voces','Voces','Voces'];//, 'artista4', 'artista5', 'artista6', 'artista7'];
const pistas5 = ['PRUEBA', 'IMPECABLE', 'CAPITAN', 'CON MALDAD', 'P4RUEBA', 'P5RUEBA'];



const toastLiveExample = document.getElementById('liveToast')
const toastCopy = document.getElementById('copyToast')
const toastCopy2 = document.getElementById('copyToast1')
const toast = new bootstrap.Toast(toastLiveExample)
const toast1 = new bootstrap.Toast(toastCopy)
const toast2 = new bootstrap.Toast(toastCopy2)

const salidaShare = ['⬜', '⬜', '⬜', '⬜', '⬜'];

textInput.addEventListener('input', () => {
  const query = textInput.value.toLowerCase();
  if (query.length > 0) {
    // Example suggestions, replace with your own logic
    const exampleSuggestions = ['Intento - Ulises Bueno', 'Perfecta - Miranda!', 'El anillo del capitán Beto - Invisible', 'Sin Documentos - Los Rodriguez', 'Virtual Diva - Don Omar', 'Malamente - Rosalia', 'Tuve que quemar - Sara Hebe',
      'La Bicicleta - Carlos Vives & Shakira', 
      'Despacito - Luis Fonsi & Daddy Yankee', 
      'Bailando - Enrique Iglesias', 
      'Vivir Mi Vida - Marc Anthony', 
      'Corazón Partío - Alejandro Sanz', 
      'Me Gustas Tú - Manu Chao', 
      'La Camisa Negra - Juanes', 
      'Rayando el Sol - Maná', 
      'Color Esperanza - Diego Torres', 
      'La Gozadera - Gente de Zona & Marc Anthony', 
      'Chantaje - Shakira & Maluma', 
      'Felices los 4 - Maluma', 
      'Mi Gente - J Balvin & Willy William', 
      'Te Amo - Franco de Vita', 
      'El Perdón - Nicky Jam & Enrique Iglesias',
      'Gasolina - Daddy Yankee', 
      'Livin’ la Vida Loca - Ricky Martin', 
      'La Tortura - Shakira & Alejandro Sanz', 
      'Bésame Mucho - Consuelo Velázquez', 
      'Bailando Por Ahí - Juan Magán', 
      'Danza Kuduro - Don Omar & Lucenzo', 
      'Propuesta Indecente - Romeo Santos', 
      'La Mordidita - Ricky Martin', 
      'Taboo - Don Omar',
      'De Música Ligera - Soda Stereo',
      'Persiana Americana - Soda Stereo',
      'Crimen - Gustavo Cerati',
      'La Ciudad de la Furia - Soda Stereo',
      'Lamento Boliviano - Los Enanitos Verdes',
      'Costumbres Argentinas - Los Abuelos de la Nada',
      'Seminare - Serú Girán',
      'Los Dinosaurios - Charly García',
      'Mariposa Tecknicolor - Fito Páez',
      'Un Vestido y un Amor - Fito Páez',
      'Nada Personal - Soda Stereo',
      'Cuando Pase el Temblor - Soda Stereo',
      'Don - Miranda!',      
    ];
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
document.getElementById('pista1').innerText=pistas1[aux];
document.getElementById('pista2').innerText=pistas2[aux];
document.getElementById('pista3').innerText=pistas3[aux];
document.getElementById('pista4').innerText=pistas4[aux];

document.getElementById('card1').classList.add('cardbounce');


//document.getElementById('card1').style.border='3px solid rgba(0, 40, 218, 0.5)';
let pista = 0; // 0-6 indica en que pista esta actualmente el usuario
document.querySelector('#skip').addEventListener('click', () => {
  if (pista < 6) {
    salidaShare[pista] = '🟥';
    pista++;
    switch (pista) {
      case 1:
        document.getElementById('card1').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card2').classList.add('cardbounce');
        document.getElementById('play2').disabled = false;
        stopAudio();
        break;
      case 2:
        document.getElementById('card2').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card3').classList.add('cardbounce');
        document.getElementById('play3').disabled = false;
        stopAudio();
        break;
      case 3:
        document.getElementById('card3').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card4').classList.add('cardbounce');
        document.getElementById('play4').disabled = false;
        stopAudio();
        break;
      case 4:
        document.getElementById('card4').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('card5').classList.add('cardbounce');
        document.getElementById('pista5').innerText=pistas5[aux];
        stopAudio();
        break;
      case 5:
        document.getElementById('compartir').innerHTML = `<p>Bandle #${Nrocancion} ${currentDate}</p> <p>${salidaShare.toString}</p>`;
        document.getElementById('card5').style.backgroundColor = 'rgb(196, 58, 58)';
        document.getElementById('win1').innerText = "Perdiste, La canción era: ";
        document.getElementById('win2').innerText = cancion + " - " + artista;
        document.querySelector('#skip').style.visibility = 'hidden';
        document.querySelector('#guess').style.visibility = 'hidden';
        document.querySelector('#texto').style.visibility = 'hidden';
        document.getElementById('themeToggle').style.visibility = 'hidden';
        playAudio(audioL);
        break;
      default:
        break;
    }
  }
});
document.querySelector('#guess').addEventListener('click', () => {
  var textInput = document.querySelector('#textInput').value;
  if (textInput === '') {
    return;
  }else{

    const userGuess = textInput.toLowerCase();
    const [userSong, userArtist] = userGuess.split(' - ').map(part => part.trim());
    const correctAnswer = `${cancion.toLowerCase()} - ${artista.toLowerCase()}`;
    document.querySelector('#textInput').value = '';

    if (userGuess === correctAnswer) {
      document.getElementById('win1').innerText = "¡Ganaste! La canción es:";
      document.getElementById('win2').innerText = `${cancion} - ${artista}`;
      if(pista == 0){
        document.getElementById('card1').style.backgroundColor = 'rgb(11, 145, 6)';
        playConfetti();
        document.getElementById('compartir').innerHTML = `<p>Bandle #${Nrocancion} ${currentDate}</p>  <p>🟩⬜⬜⬜⬜</p>`;
      }else{
        document.getElementById('card'+(pista+1)).style.backgroundColor = 'rgb(11, 145, 6)';
        salidaShare[pista] = '🟩';
        playConfetti();
      }
      document.getElementById('play1').disabled = false;
      document.getElementById('play2').disabled = false;
      document.getElementById('play3').disabled = false;
      document.getElementById('play4').disabled = false;
      document.querySelector('#skip').style.visibility = 'hidden';
      document.querySelector('#guess').style.visibility = 'hidden';
      document.querySelector('#texto').style.visibility = 'hidden';
      document.getElementById('themeToggle').style.visibility = 'hidden';
      document.getElementById('pista5').innerText=pistas5[aux];
      document.getElementById('compartir').innerHTML = `<p>Bandle #${Nrocancion} ${currentDate}</p>  <p>${salidaShare.join('')}</p>`;
    } else {
      if(userArtist === artista.toLowerCase()){
        document.getElementById('card'+(pista+1)).style.backgroundColor = 'rgb(194, 191, 0)';
        document.getElementById('play'+(pista+2)).disabled = false;
        document.getElementById('card'+(pista+2)).classList.add('cardbounce');
        salidaShare[pista] = '🟨';
        toast2.show();
        stopAudio();
        pista++;
      }else{
        salidaShare[pista] = '🟥';
        pista++;
        console.log(pista);
        switch (pista) {
          case 1:
            toast.show()
            document.getElementById('card1').style.backgroundColor = 'rgb(196, 58, 58)';
            document.getElementById('card2').classList.add('cardbounce');
            document.getElementById('play2').disabled = false;
            stopAudio();
            break;
          case 2:
            toast.show()
            document.getElementById('card2').style.backgroundColor = 'rgb(196, 58, 58)';
            document.getElementById('card3').classList.add('cardbounce');
            document.getElementById('play3').disabled = false;
            stopAudio();
            break;
          case 3:
            toast.show()
            document.getElementById('card3').style.backgroundColor = 'rgb(196, 58, 58)';
            document.getElementById('card4').classList.add('cardbounce');
            document.getElementById('play4').disabled = false;
            stopAudio();
            break;
          case 4:
            toast.show()
            document.getElementById('card4').style.backgroundColor = 'rgb(196, 58, 58)';
            document.getElementById('card5').classList.add('cardbounce');
            document.getElementById('pista5').innerText=pistas5[aux];
            stopAudio();
            break;
          case 5:
            toast.show();
            document.getElementById('card5').style.backgroundColor = 'rgb(196, 58, 58)';
            document.getElementById('win1').innerText = "Perdiste, La canción era: ";
            document.getElementById('win2').innerText = cancion + " - " + artista;
            document.getElementById('compartir').innerHTML = `<p>Bandle #${Nrocancion} ${currentDate}</p> <p>${salidaShare.join('')}</p>`;
            playAudio(audioL);
            document.getElementById('play1').disabled = false;
            document.getElementById('play2').disabled = false;
            document.getElementById('play3').disabled = false;
            document.getElementById('play4').disabled = false;
            document.querySelector('#skip').style.visibility = 'hidden';
            document.querySelector('#guess').style.visibility = 'hidden';
            document.querySelector('#texto').style.visibility = 'hidden';
            document.getElementById('themeToggle').style.visibility = 'hidden';

            break;
          default:
            break;
        }
      }
    }
  }
});


document.querySelector('#compartirbtn').addEventListener('click', () => {
  const contentToCopy = document.querySelector('#compartir').innerText;
  navigator.clipboard.writeText(contentToCopy).then(() => {
    toast1.show()
  }).catch(err => {
    console.error('Failed to copy content: ', err);
  });
});

//LOGICA MODO OSCURO-CLARO
const themeToggle = document.getElementById('themeToggle');
let cartas = document.querySelectorAll('.card');
// Alternar entre modo claro y oscuro
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-bs-theme');
  if(theme === 'dark'){
    document.documentElement.setAttribute('data-bs-theme', 'light');
        cartas.forEach(carta => {
      if(carta.style.backgroundColor != 'rgb(196, 58, 58)' && carta.style.backgroundColor != 'rgb(11, 145, 6)'){
        carta.style.backgroundColor = 'rgb(255, 196, 120)';
      }
      });
      themeToggle.classList.remove('lightmodebtn');
      themeToggle.classList.add('darkmodebtn');

  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    cartas.forEach(carta => {
      if(carta.style.backgroundColor != 'rgb(196, 58, 58)' && carta.style.backgroundColor != 'rgb(11, 145, 6)'){
        carta.style.backgroundColor = 'rgb(20, 20, 20)';
      }
      });
      themeToggle.classList.remove('darkmodebtn');
      themeToggle.classList.add('lightmodebtn');
  }

});

// Example usage:
const exampleArray = ['r', 'r', 'a', 'v', 'b'];
console.log(mapCharactersToSquares(exampleArray)); // Output: 🟥🟥🟨🟩⬜

function mapCharactersToSquares(arr) {
  return arr.map(char => {
    switch (char) {
      case 'r':
        return '🟥';
      case 'v':
        return '🟩';
      case 'b':
        return '⬜';
      case 'a':
        return '🟨';
      default:
        return '';
    }
  }).join('');
}

