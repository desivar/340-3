

/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const app = express();
const static = require("./routes/static");
const inventoryRoute = require("./routes/inventoryRoute"); // Import inventoryRoute

/* ***********************
 * Routes
 *************************/
app.get("/", (req, res) => {
  res.render("index", { title: "Home" }); // Corrected to res.render()
});

app.use(static);

// Inventory routes
app.use("/inv", inventoryRoute); // Use inventoryRoute

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
  console.log(`app listening on ${host}:${port}`);
});