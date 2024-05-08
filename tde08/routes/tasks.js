const express = require("express");
const {
  findTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../db/tasks");
const router = express.Router();

router.get("/tasks", async (req, res) => {
  const tasks = await findTasks();
  res.json(tasks);
});

router.post("/tasks", async (req, res) => {
  const data = req.body;
  const task = await createTask(data);
  res.json({ task });
});

router.put("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const task = await updateTask(id, req.body);
  res.json({ task });
});

router.delete("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const task = await deleteTask(id);
  res.json({ task });
});

module.exports = router;
