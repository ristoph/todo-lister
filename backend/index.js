const express = require("express")
const jwt  = require("jwt")
const mng = require("mongoose")
const app = express()

app.use(express.json())

