const express = require("express");
const tasksRouter = require("./routes/tasks");
const server = express();

server.use(express.json());
server.use(tasksRouter);

module.exports = server;
