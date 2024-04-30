const { join } = require("path");

const imgSrc = join("./images", "/group1/teste.png");
console.log(imgSrc);
console.log(join(__dirname, "./images", "/group1/teste.png"));

const pessoa = {
  nome: "Teste",
};

const nome = "teste";
// destructor obj
const { nome: nomePessoa } = pessoa;

console.log(nome);

// destructor array
const arr = [1, 2, 3];
const [e1, ...resto] = arr;

console.log(resto);

const { duplicarNumero } = require("./utils");

console.log(duplicarNumero(10));
