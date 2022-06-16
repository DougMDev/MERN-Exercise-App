require("dotenv").config();
const express = require("express");

const app = express();

// middleware to display requsts
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the App" });
});

app.listen(process.env.PORT, () => {
  console.log(`Backend Active on Port ${process.env.PORT}`);
});
