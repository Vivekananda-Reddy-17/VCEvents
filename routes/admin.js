const express = require("express");
const router = express.Router({ mergeParams: true });
const Event = require("../models/event");
const wrapAsync = require("../utils/wrapAsync.js");
const adminController = require("../contollers/admin.js");

router.get("/", wrapAsync(adminController.openAdminDashboard));

// Show form to create new event
router.get("/events/new", adminController.renderNewEventForm);

// Handle form submission to create a new event
router.post("/events", wrapAsync(adminController.createEvent));

// Update Event
router.put("/:id", wrapAsync(adminController.updateEvent));

// GET /admin/:id/edit
router.get("/:id/edit", wrapAsync(adminController.renderEditForm));

module.exports = router;
