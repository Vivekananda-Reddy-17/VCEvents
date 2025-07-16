const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverrride = require("method-override");
const ExpError = require("./utils/ExpError.js");
const session = require("express-session");
const registerRouter = require("./routes/register.js");
const eventRouter = require("./routes/events.js");
const userRouter = require("./routes/user.js");
const Event = require("./models/event");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const port = 3000;

const MONGO_URL = "mongodb://127.0.0.1:27017/vcevents";

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
  secret: "mysecretstring",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(methodOverrride("_method"));
app.use(express.static(path.join(__dirname,"/public")));


app.engine("ejs", ejsMate);



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/", async (req, res) => {
  try {
    const events = await Event.find({});  // fetch all events from DB
    res.render("pages/index.ejs", { events });  // pass events to the template
  } catch (e) {
    console.error(e);
    res.render("pages/index.ejs", { events: [] });  // fallback empty array
  }
});

app.get("/test-flash", async(req, res) => {
  req.flash("success", "This is a test success message!");
  res.redirect("/register");
});


// Admin Router
app.use("/admin", adminRouter);

// Events Router
app.use("/events", eventRouter);

// Register Router
app.use("/register", registerRouter);

// User Router
app.use("/", userRouter);

app.use((req, res, next) => {
  next(new ExpError(404, "Page not found!"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong." } = err;
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});