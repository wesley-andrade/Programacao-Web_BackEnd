const express = require("express");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const authenticateToken = require("./middlewares/authMiddleware");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/v1", authRoutes);
app.use(authenticateToken);
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
