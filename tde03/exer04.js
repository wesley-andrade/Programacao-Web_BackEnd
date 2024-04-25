const array = [2, 4, 6, 7, 10, 15];

function maiorQueCinco(num) {
  return num > 5;
}

function filtrarArray(funcao, arr) {
  const newArray = [];

  for (let num of arr) {
    if (funcao(num)) {
      newArray.push(num);
    }
  }
  return newArray;
}

console.log("Array original: " + array);
console.log("Array depois da função: " + filtrarArray(maiorQueCinco, array));
