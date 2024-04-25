function gerarDobro(indice) {
  return indice * 2;
}

function gerarLista(funcao, num) {
  const lista = [];

  for (let i = 0; i < num; i++) {
    lista.push(funcao(i));
  }
  return lista;
}

console.log(gerarLista(gerarDobro, 3));
