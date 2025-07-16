const mongoose = require("mongoose");
const Event = require("../models/event.js");

mongoose.connect("mongodb://localhost:27017/vcevents")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const seedEvents = [
  {
  "title": "Tech Innovators Conference 2025",
  "imageUrl": "https://example.com/images/tech-conference.jpg",
  "date": "2025-09-15",
  "time": "09:00 AM - 05:00 PM",
  "venue": "Silicon Valley Convention Center, CA",
  "price": "299/-",
  "capacity": 100,
  "description": "Join us for a day of insightful talks and networking with leading innovators in the tech industry.",
  "tags": ["Technology", "Innovation", "Networking", "AI", "Startups"],
  "schedule": [
    { "time": "09:00 AM", "activity": "Registration & Welcome Coffee" },
    { "time": "10:00 AM", "activity": "Keynote: The Future of AI" },
    { "time": "11:30 AM", "activity": "Panel Discussion: Startups & Scaleups" },
    { "time": "01:00 PM", "activity": "Lunch Break" },
    { "time": "02:00 PM", "activity": "Workshop: Building AI Models" },
    { "time": "04:00 PM", "activity": "Networking & Closing Remarks" }
  ],
  "speakers": [
    {
      "name": "Alice Johnson",
      "photo": "https://example.com/speakers/alice.jpg",
      "bio": "CTO at InnovateX, AI Specialist with 10+ years of experience.",
      "social": {
        "instagram": "https://twitter.com/alicejohnson",
        "linkedin": "https://linkedin.com/in/alicejohnson"
      }
    },
    {
      "name": "Bob Lee",
      "photo": "https://example.com/speakers/bob.jpg",
      "bio": "Founder & CEO of StartupHub, passionate about scaling businesses.",
      "social": {
        "instagram": "https://twitter.com/boblee",
        "linkedin": "https://linkedin.com/in/boblee"
      }
    }
  ],
  "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.123456789012!2d-122.0842496846921!3d37.42206577982594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a2f0123456%3A0x1234567890abcdef!2sSilicon+Valley+Convention+Center!5e0!3m2!1sen!2sus!4v1684647890123!5m2!1sen!2sus",
  "faqs": [
    {
      "question": "Is there a student discount available?",
      "answer": "Yes, students get a 50% discount on the ticket price with a valid ID."
    },
    {
      "question": "Will the sessions be recorded?",
      "answer": "Yes, all sessions will be recorded and shared with registered attendees."
    }
  ],
  "organizer": {
    "name": "Tech Innovators Group",
    "email": "contact@techinnovators.com",
    "phone": "+1-555-123-4567"
  }
}

];

async function seedDB() {
//   await Event.deleteMany({});
  await Event.insertMany(seedEvents);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
