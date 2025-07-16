const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const wrapAsync = require("../utils/wrapAsync.js");
const eventsController = require("../contollers/events.js");

// Show event details page by event ID
router.get(
  "/:id",
  wrapAsync(eventsController.showEventDetails)
);

// DELETE event
router.delete("/:id", wrapAsync(eventsController.destroyEvent));

module.exports = router;
