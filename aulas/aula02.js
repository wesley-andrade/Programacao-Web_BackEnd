const soma = function (a, b) {
  return a + b;
};
console.log(soma(2, 3));

const sub = (a, b) => {
  return a - b;
};
console.log(sub(5, 3));

const ehPar = (n) => n % 2 === 0;
console.log(ehPar(2));

const quadrado = (n) => n ** 2;
console.log(quadrado(2));

let idade = 18;
if (idade >= 18) console.log("Maior de idade");

const teste = () => {
  const idade = 18;
  if (idade >= 18) {
    var ehMaior = true;
  }
  console.log(ehMaior);
};
teste();

console.log("Arrays");

const notas = [10, 6, 4, 8, 6, 8, 10];
console.log(notas);

notas.push(9);
console.log(notas);

notas.pop();
notas.pop();
notas.pop();
console.log(notas);

notas.unshift(0);
console.log(notas);

notas.shift();
notas.shift();
console.log(notas);
