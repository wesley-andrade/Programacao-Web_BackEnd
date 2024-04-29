function pairSum(a, b, callbackSuccess, callbackError) {
  const result = a + b;

  if (result % 2 === 0) {
    callbackSuccess(
      `A operação foi um sucesso, o resultado foi ${result} sendo um número par`
    );
  } else {
    callbackError(
      `A operação foi um erro, o resultado foi ${result} sendo um número impar`
    );
  }
}

function callbackSuccess(message) {
  console.log(message);
}

function callbackError(message) {
  console.error(message);
}
