const listaDePessoas = [
    { nome: "Rayane", sobrenome: "Cristina", idade: 21 },
    { nome: "Carlos", sobrenome: "Henrique", idade: 17 },
    { nome: "Julio", sobrenome: "Cesar", idade: 19 },
    { nome: "Camila", sobrenome: "Fernandes", idade: 18 },
    { nome: "Julia", sobrenome: "Fernandes", idade: 10 },
    { nome: "Bruno", sobrenome: "Albuquerque", idade: 31 },
    { nome: "Túlio", sobrenome: "Bastos", idade: 22 },
    { nome: "Cristiane", sobrenome: "Maria", idade: 41 },
  ];
  
  const pessoasMaioresDe18 = listaDePessoas.filter(pessoa => pessoa.idade >= 18);
  
  const pessoaMaiorQue30 = pessoasMaioresDe18.find(pessoa => pessoa.idade > 30);
  
  if (pessoaMaiorQue30) {
    console.log(`${pessoaMaiorQue30.nome} ${pessoaMaiorQue30.sobrenome}`);
  } else {
    console.log("Não há pessoas com mais de 30 anos na lista.");
  }
  