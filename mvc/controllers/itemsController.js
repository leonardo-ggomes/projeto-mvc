const app = require('../../startup.js')
const ItemModel = require("../models/itemsModel.js")
const path = require("path")

app.get("/getItem", (req, res) => {
    const item = ItemModel

    item.name = "Car"
    item.description = "Blue Porsche"
    
    res.json(item.toJSON())
})

app.get("/", (req,res) => {
    res.sendFile(path.resolve("mvc/views/itemsView.html"))
})