const express = require("express");

const router = express.Router();

//Get Workouts
router.get("/", (req, res) => {
  res.json({ message: "All Workouts" });
});

//Get Single Workout
router.get("/:id", (req, res) => {
  res.json({ message: "Single Workout" });
});

//Post a New Workout
router.post("/", (req, res) => {
  res.json({ message: "Sending a New Workout" });
});

//Delete a Workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Deleting a Workout" });
});

//Update a Workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a Workout" });
});

module.exports = router;
