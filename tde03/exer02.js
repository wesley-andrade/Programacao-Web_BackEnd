const array = [2, 5, 4, 3];

function somaElementosPares(arr) {
  let soma = 0;

  arr.forEach((num) => {
    if (num % 2 === 0) {
      soma += num;
    }
  });
  return soma;
}

console.log(somaElementosPares(array));
