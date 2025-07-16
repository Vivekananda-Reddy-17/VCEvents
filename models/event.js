const mongoose = require("mongoose");
const { Schema } = mongoose;

const speakerSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String }, // URL or path to image
  bio: { type: String },
  social: {
    instagram: { type: String },
    linkedin: { type: String }
  }
});

const scheduleItemSchema = new Schema({
  time: { type: String, required: true },
  activity: { type: String, required: true }
});

const faqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const organizerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
});

const eventSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  category: {type: String, required: true},
  price: { type: String, default: "Free" },
  description: { type: String, required: true },
  schedule: [scheduleItemSchema],
  speakers: [speakerSchema],
  mapEmbedUrl: { type: String },
  faqs: [faqSchema],
  tags: [String],
  capacity: { type: Number, required: true},
  organizer: organizerSchema
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
