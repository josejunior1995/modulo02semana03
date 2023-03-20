function adicionarTextos() {
    const textos = ["Texto 1", "Texto 2", "Texto 3", "Texto 4", "Texto 5"];
    const divTextos = document.getElementById("textos");
  
    for (let i = 0; i < textos.length; i++) {
      const texto = document.createElement("span");
      texto.classList.add("texto");
      texto.textContent = textos[i];
      divTextos.appendChild(texto);
    }
  }
  
  adicionarTextos();
  