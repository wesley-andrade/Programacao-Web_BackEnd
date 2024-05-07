const express = require("express");
const router = express.Router();

let tasks = [
  {
    id: 1,
    name: "Comprar leite",
    description: "Ir no mercado da esquina e comprar leite",
    isDone: false,
  },
];

router.get("/tasks", (req, res) => {
  res.json({ tasks: tasks });
});

router.post("/tasks", (req, res) => {
  const task = req.body;
  task.id = tasks.length + 1;
  tasks.push(task);
  res.json({ status: "ok" });
});

router.put("/tasks:id", (req, res) => {
  const id = req.params.id;
  tasks.forEach((task) => {
    if (task.id === id) {
      task.name = req.body.name;
      task.description = req.body.description;
      task.isDone = req.body.isDone;
    }
  });
  res.json({ status: "ok" });
});

router.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  res.json({ status: "ok" });
});

module.exports = router;
