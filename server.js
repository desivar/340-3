/* ******************************************
 * This server.js file is the primary file of the
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
// Add the inventory route import.
const inventoryRoute = require("./routes/inventoryRoute");

// Set the view engine to EJS
app.set("view engine", "ejs");

/* ***********************
 * Routes
 *************************/
app.use(static);

// Add the inventory routes
app.use("/inv", inventoryRoute);

// Add the root route - Corrected to render index.ejs
app.get("/", (req, res) => {
  res.render("index"); // Render the index.ejs file
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
  console.log(`app listening on ${host}:${port}`); // Corrected line
});