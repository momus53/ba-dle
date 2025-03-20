export function setupSkip(element) {
  let counter = 0
  element.classList.add('red-button') // Agrega esta línea
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Saltear`

  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
