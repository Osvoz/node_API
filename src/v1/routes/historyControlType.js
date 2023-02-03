const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all");
});

router.get("/:workoutId", (req, res) => {
  res.send("Get an existing record");
});

router.post("/", (req, res) => {
  res.send("Create a new record");
});

router.patch("/:workoutId", (req, res) => {
  res.send("Update an existing record");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing record");
});

module.exports = router;