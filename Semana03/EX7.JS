const textos = ['Texto 1', 'Texto 2', 'Texto 3', 'Texto 4', 'Texto 5'];
const container = document.getElementById('textos');

textos.forEach((texto) => {
  const elemento = document.createElement('p');
  elemento.textContent = texto;
  elemento.classList.add('texto');
  container.appendChild(elemento);
});
