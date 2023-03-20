function printAndCount(arr) {
  arr.forEach(elem => {
    console.log(elem);
  });
  return arr.length;
}

const myArr = [1, 2, 3, 4, 5];
const result = printAndCount(myArr);
console.log("Tamanho do array:", result);
