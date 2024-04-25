const array = [2, 3, 4, 5];

function dobrar(num) {
  return num * 2;
}

function mapearArray(arr, funcao) {
  const newArray = [];

  for (let num of arr) {
    newArray.push(funcao(num));
  }
  return newArray;
}

console.log(`Array original: ${array}`);
console.log(`Array depois da função: ${mapearArray(array, dobrar)}`);
