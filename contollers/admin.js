const Event = require("../models/event");

module.exports.openAdminDashboard = async(req, res) => {
    const events = await Event.find({});
    res.render("pages/adminDashboard", { events });
};

module.exports.renderNewEventForm = (req, res) => {
  res.render("pages/events/newEvent"); 
};

module.exports.createEvent = async (req, res, next) => {
    let eventData = req.body.event; // all fields from form (nested under event)

    // Handle comma-separated tags
    if (typeof eventData.tags === "string") {
        eventData.tags = eventData.tags.split(",").map(tag => tag.trim()).filter(Boolean);
    }

    // Optional: ensure arrays exist even if only one item
    if (!Array.isArray(eventData.schedule)) eventData.schedule = [eventData.schedule].filter(Boolean);
    if (!Array.isArray(eventData.speakers)) eventData.speakers = [eventData.speakers].filter(Boolean);
    if (!Array.isArray(eventData.faqs)) eventData.faqs = [eventData.faqs].filter(Boolean);

    const newEvent = new Event(eventData);
    await newEvent.save();
    res.redirect(`/events/${newEvent._id}`);
};

module.exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body.event;
    
    const updatedEvent = await Event.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });
    
    res.redirect(`/admin`);
};

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      req.flash("error", "Event does not exist!");
      return res.redirect("/");
    }
    res.render("pages/events/editEvent", { event });
};