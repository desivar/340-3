const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const inventoryRoute = require("./routes/inventoryRoute");
const session = require("express-session"); // Import express-session
const flash = require("connect-flash"); // Import connect-flash

// Set the view engine to EJS
app.set("view engine", "ejs");

// Configure express-session
app.use(session({
    secret: "your-secret-key", // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
}));

// Configure connect-flash
app.use(flash());

/* ***********************
 * Routes
 *************************/
app.use(static);
app.use("/inv", inventoryRoute);

app.get("/", (req, res) => {
    res.render("index");
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`app listening on <span class="math-inline">\{host\}\:</span>{port}`);
});