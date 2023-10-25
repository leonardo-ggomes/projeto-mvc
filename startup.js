const express = require("express")
const consign = require("consign")

const app = express()
//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

consign()
        .include("mvc/controllers")
        .into(app)

app.listen(3000, () => console.log("Online Server at port 3000"))

module.exports = app