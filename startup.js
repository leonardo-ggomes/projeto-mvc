const consign = require("consign")
const express = require("express")

const app = express()

app.listen(3000, () => console.log("Online Server at port 3000"))

consign()
        .include("mvc/controllers")
        .into(app)

module.exports = app

