const express = require("express");
const tasksRouter = require("./routes/tasks");
const authRouter = require("./routes/auth");
const server = express();

server.use(express.json());
server.use(tasksRouter);
server.use(authRouter);

module.exports = server;
