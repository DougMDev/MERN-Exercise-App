require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

const app = express();

// middleware to display requsts
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//basic routes
app.use("/api/workouts", workoutRoutes);
//error route
app.get("*", (req, res) => {
  res.json({ message: "Sorry This Page Cannot Be Found" });
});

//Connecting to the DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Listening on the App once connected to the Database
    app.listen(process.env.PORT, () => {
      console.log(
        `Database Connected & Backend Active on Port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
