const { prisma } = require("./prisma");

const findUserByEmail = async (email) => {
  return await prisma.users.findFirst({
    where: {
      email: email,
    },
  });
};

const createUser = async (data) => {
  const user = await prisma.users.create({
    data: {
      email: data.email,
      password: data.password,
    },
  });
  return user;
};

module.exports = { findUserByEmail, createUser };
