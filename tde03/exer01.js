const array = [5, 10, 15, 3, 1, 9];

function encontrarMaiorElemento(arr) {
  let maior = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}

console.log(encontrarMaiorElemento(array));
