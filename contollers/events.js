const Event = require("../models/event");

module.exports.showEventDetails = async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      req.flash("error", "Event does not exist!");
      return res.redirect("/");
    }
    res.render("pages/events/eventDetails", { event });
};

module.exports.destroyEvent = async (req, res, next) => {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect("/admin");
};