require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the App" });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Backend Active on Port ${process.env.PORT}`);
});
