export function setupGuess(element) {
  let counter = 0
  element.classList.add('green-button') // Agrega esta línea
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Adivinar`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
