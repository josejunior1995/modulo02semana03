const countParImpar = function(arr) {
    let countPar = 0;
    let countImpar = 0;
    arr.forEach(num => {
      if (num % 2 === 0) {
        countPar++;
      } else {
        countImpar++;
      }
    });
    const total = arr.length;
    const message = `A quantidade informada foi ${total}. A quantidade de valores pares foi ${countPar} e a de valores ímpares foi ${countImpar}.`;
    console.log(message);
  }
  
  const myArr = [1, 2, 3, 4, 5];
  countParImpar(myArr);
  