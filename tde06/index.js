const express = require("express");

const app = express();
const port = 5000;

app.get("/health", (req, res) => {
  res.json({ status: "running" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
