/* ******************************************
 * This server.js file is the primary file of the
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
// Load environment variables
require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Import routes
const staticRoutes = require("./routes/static");
const inventoryRoutes = require("./routes/inventoryRoute");

// Set the view engine to EJS and configure layouts
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// Serve static files (if you have a public folder)
app.use(express.static("public"));

/* ***********************
 * Routes
 *************************/
app.use("/", staticRoutes);             // Static pages
app.use("/inv", inventoryRoutes);       // Inventory-related routes

// Root route - render index.ejs
app.get("/", (req, res) => {
  res.render("index"); // Make sure views/index.ejs exists
});

/* ***********************
 * Server Configuration
 *************************/
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`✅ Server running at http://${HOST}:${PORT}`);
});
