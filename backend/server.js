require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

const app = express();

// middleware to display requsts
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Backend Active on Port ${process.env.PORT}`);
});
