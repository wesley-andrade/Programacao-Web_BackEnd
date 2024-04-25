let user;
console.log("1");
setTimeout(() => {
  user = {
    name: "Wesley",
  };
  console.log("dentro do timeout:", user);
}, 0);
console.log(user);

const buscarUser = (callback) => {
  setTimeout(() => {
    callback({
      name: "Wesley",
    });
  }, 300);
};

const buscarCompras = (user, callback) => {
  setTimeout(() => {
    callback([
      {
        user: user.name,
        produto: 1,
      },
      {
        user: user.name,
        produto: 2,
      },
      {
        user: user.name,
        produto: 3,
      },
    ]);
  }, 300);
};

buscarUser((user) => {
  buscarCompras(user, (compras) => {
    console.log(compras);
  });
});

const buscarUserPromise = () => {
  return new Promise((callback) => {
    setTimeout(() => {
      callback({
        name: "Wesley",
      });
    }, 300);
  });
};

const buscarComprasPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([])
      reject("Não achei nenhuma compra");
    }, 300);
  });
};

buscarUserPromise()
  .then((user) => {
    console.log("Promise");
    console.log(user);
    return buscarComprasPromise(user);
  })
  .then((compras) => {
    console.log(compras);
  })
  .catch((err) => {
    console.log("Tive um erro:", err);
  })
  .then(() => {
    console.log("Terminei de executar");
  })
  .then(() => {
    console.log("1");
  })
  .then(() => {
    console.log("2");
  });

let user1;
buscarUserPromise()
  .then((user) => {
    user1 = user;
  })
  .catch(() => {});
console.log(user1);

console.log("2 do lado de fora");

const findUser = (id) => {
  if (id === 1)
    return {
      id: 1,
      name: "Wesley",
    };
  throw new Error("Not found");
};

const t2 = (id) => {
  try {
    const user = findUser(id);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

t2(2);

async function t3() {}

const t4 = async function () {};

const main = async () => {
  try {
    const user = await buscarUserPromise();
    console.log("Async/await");
    console.log(user);
    const compras = await buscarComprasPromise(user);
    console.log(compras);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

main();
