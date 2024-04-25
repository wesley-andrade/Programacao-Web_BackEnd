const aluno = {
  nome: "Wesley",
  idade: 19,
  curso: "TADS",
};

function validarMaioridade(objeto) {
  return (
    objeto.hasOwnProperty("idade") &&
    typeof objeto.idade === "number" &&
    objeto.idade >= 18
  );
}

function validarDados(funcao, objeto) {
  return funcao(objeto);
}

console.log(validarDados(validarMaioridade, aluno));
