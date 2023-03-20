const listaDeFrutas = ['maçã', 'laranja', 'banana', 'uva', 'manga'];

const frutasSeparadasPorVirgula = (lista) => {
  let resultado = 'Frutas: ';
  lista.forEach((fruta, index) => {
    if (index < lista.length - 1) {
      resultado += `${fruta}, `;
    } else {
      resultado += `${fruta}.`;
    }
  });
  return resultado;
};

console.log(frutasSeparadasPorVirgula(listaDeFrutas));
