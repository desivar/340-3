

/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const router = new express.Router() 
const invController = require("../controllers/invController")

/* ***********************
 * Routes
 *************************/
app.get("/", (req, res) => {
    resizeTo.render("index", { title: "Home" })
})
app.use(static)
// Inventory routes

//index route
app.get("/", (req, res) => {
    res.render("index", { title: "Home" })
})

app.use("/inv", inventoryRoute)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})