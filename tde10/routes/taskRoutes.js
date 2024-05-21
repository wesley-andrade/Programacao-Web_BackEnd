const express = require("express");
const { body, validationResult } = require("express-validator");

const prisma = require("../prismaClient");

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.user.id },
  });
  res.json(tasks);
});

router.post(
  "/",
  body("name").notEmpty(),
  body("description").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, isDone } = req.body;
    const task = await prisma.task.create({
      data: {
        name,
        description,
        isDone,
        userId: req.user.id,
      },
    });
    res.json(task);
  }
);

router.put(
  "/:id",
  body("name").optional().notEmpty(),
  body("description").optional().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, description, isDone } = req.body;

    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });
    if (!task || task.userId !== req.user.id) {
      return res.sendStatus(403);
    }

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { name, description, isDone },
    });
    res.json(updatedTask);
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const task = await prisma.task.findUnique({
    where: { id: parseInt(id) },
  });
  if (!task || task.userId !== req.user.id) {
    return res.sendStatus(403);
  }

  await prisma.task.delete({
    where: { id: parseInt(id) },
  });
  res.sendStatus(204);
});

module.exports = router;
