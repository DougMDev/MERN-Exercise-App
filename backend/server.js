const express = require("express");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the App" });
});

app.listen(port, (req, res) => {
  console.log(`Backend Active on Port ${port}`);
});
