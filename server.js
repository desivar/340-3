const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const inventoryRoute = require("./routes/inventoryRoute");

// Set the view engine to EJS
app.set("view engine", "ejs");

/* ***********************
 * Routes
 *************************/
app.use(static);
app.use("/inv", inventoryRoute);

app.get("/", (req, res) => {
    res.render("index"); // Now Express knows to use EJS
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