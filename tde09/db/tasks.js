const { prisma } = require("./prisma");

const findTasks = async () => {
  const tasks = await prisma.tasks.findMany();
  return tasks;
};

const createTask = async (data) => {
  const task = await prisma.tasks.create({
    data: {
      name: data.name,
      description: data.description,
      isDone: data.isDone,
    },
  });
  return task;
};

const updateTask = async (id, data) => {
  const task = await prisma.tasks.update({
    data,
    where: { id },
  });
  return task;
};

const deleteTask = async (id) => {
  const task = await prisma.tasks.delete({
    where: { id },
  });
  return task;
};

module.exports = { findTasks, createTask, updateTask, deleteTask };
