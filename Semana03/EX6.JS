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
  
  const pessoasComMenosDe18Anos = listaDePessoas.filter((pessoa) => pessoa.idade < 18);
  
  const pessoasComAnosParaMaioridade = pessoasComMenosDe18Anos.map((pessoa) => {
    const anosParaMaioridade = 18 - pessoa.idade;
    return { ...pessoa, anosParaMaioridade };
  });
  
  console.log(pessoasComAnosParaMaioridade);
  