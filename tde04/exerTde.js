//Exercicio 1
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

//Exercicio 2
function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    pairSum(
      a,
      b,
      (successMessage) => {
        resolve(successMessage);
      },
      (errorMessage) => {
        reject(errorMessage);
      }
    );
  });
}

sumPromise(2, 2)
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  });
