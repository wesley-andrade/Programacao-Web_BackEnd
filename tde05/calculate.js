const {
  addition,
  subtraction,
  division,
  multiplication,
} = require("./calculator");

console.log(`Adição: ${addition(10, 5)}`);
console.log(`Subtração: ${subtraction(10, 3)}`);
console.log(`Divisão: ${division(10, 2)}`);
console.log(`Multiplicação: ${multiplication(2, 2)}`);
