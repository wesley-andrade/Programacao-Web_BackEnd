console.log("Ola mundo");

let teste = 10;
var nome = "Wesley";
const ehPar = true;

teste = 12;
teste = "Ola mundo";

console.log(teste);
console.log(nome);
console.log(ehPar);

console.log(2 + 2);
console.log(3 * 2);
console.log(10 / 2);
console.log(8 - 3);
console.log(5 % 2);
console.log(parseInt(5 / 2));
console.log(3 ** 2);

console.log("Tabela Verdade &&");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Tabela Verdade ||");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("\n\nComparações");
console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 === 1);
console.log(1 != 2);
console.log(1 != "1");
console.log(1 !== "1");
console.log(1 !== 2);
console.log(1 !== 1);
console.log(1 < 2);
console.log(1 <= 1);
console.log(2 >= 1);

let idade = 19;
if (idade >= 18) {
  console.log("Maior de Idade");
} else if (idade === 18) {
  console.log("Igual a 18");
} else {
  console.log("Menor de Idade");
}

const code = 1;
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 10;
while (i < 30) {
  console.log(i);
  i = i * 2;
}

function soma(a, b = 1) {
  return a + b;
}

const result = soma(2, 2);
console.log(result);

switch (code) {
  case 1:
    console.log("Ligar TV");
    break;
  case 2:
    console.log("Desistir TV");
    break;
  default:
    console.log("Sei la");
}
