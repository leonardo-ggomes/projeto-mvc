const SkinDAO = require("../DAO/SkinDAO.js")
const path = require("path")

module.exports = (app) => {

    app.get("/getSkins", async (req, res) => {
        const skinDAO = new SkinDAO()       
            
        res.json(await skinDAO.consultarTodos())
    })
    
    app.get("/", (req,res) => {
        res.sendFile(path.resolve("mvc/views/itemsView.html"))
    })

}

