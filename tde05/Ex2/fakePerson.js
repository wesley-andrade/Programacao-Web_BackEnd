const { faker } = require("@faker-js/faker");

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function createRandomUser() {
  const birthDate = faker.date.birthdate();
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: formatDate(birthDate),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 3,
});

console.log(users);
