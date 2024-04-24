function menorNumero(num1, num2, num3) {
  let menor = num1;

  if (num2 < menor) {
    menor = num2;
  }
  if (num3 < menor) {
    menor = num3;
  }

  return menor;
}

console.log(menorNumero(15, 5, 10));
