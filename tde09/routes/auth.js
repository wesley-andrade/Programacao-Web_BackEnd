const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../db/users");

const router = express.Router();

router.post("/v1/register", async (req, res) => {
  const { email, password } = req.body;

  const userAlreadyExists = await findUserByEmail(email);
  if (userAlreadyExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await createUser({ email, password: hashedPassword });

  res.status(201).json({ id: user.id, email: user.email });
});

router.post("/v1/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET
  );
  res.json({ token });
});

module.exports = router;
