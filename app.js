const express = require("express")

const router = require("./router")

const app = express()

// Parse JSON to Object to access inside the request like req.body
app.use(express.json())

// Handling routes
app.use(router)

module.exports = app
