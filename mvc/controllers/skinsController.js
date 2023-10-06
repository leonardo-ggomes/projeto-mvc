const SkinDAO = require("../DAO/SkinDAO.js")
const path = require("path")

module.exports = (app) => {

    app.get("/getSkins", async (req, res) => {
        const skinDAO = new SkinDAO()    

        res.setHeader("Access-Control-Allow-Origin","*")    
        res.json(await skinDAO.consultarTodos())
    })   


}

