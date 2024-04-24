function somaDivisivel(num1, num2) {
  let soma = num1 + num2;

  return soma % 5 === 0;
}

console.log(somaDivisivel(7, 2));
