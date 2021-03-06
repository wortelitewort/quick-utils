const express = require("express");

// mergeParams enables access to req.params
const router = express.Router({ mergeParams: true });

// Dummy data list of users with events
const dummyUserEvents = require("../user-events");
const dummyUserTasks = require("../user-tasks");

router.post("/app-data", (req, res, next) => {
  // console.log("Hi from server");
  // res.json("Hi from server");
});

router.get("/users/:name/events", (req, res) => {
  console.log("Api route");
  const { name } = req.params;

  const user = dummyUserEvents.find(user => {
    return user.name == name;
  });

  res.json({ events: user.events });
});

router.get("/users/:name/tasks", (req, res) => {
  const { name } = req.params;

  const user = dummyUserTasks.find(user => {
    return user.name == name;
  });

  res.json({ tasks: user.tasks });
});

module.exports = router;
