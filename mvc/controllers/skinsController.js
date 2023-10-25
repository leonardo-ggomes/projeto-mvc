const SkinDAO = require("../../DAO/skinDAO")
const path = require('path')

module.exports = (app) => {

    app.get("/getSkin", async (req, res) => {
       const skinDAO = new SkinDAO()

       res.setHeader("Access-Control-Allow-Origin","*")
       res.json(await skinDAO.consultarSkins())
    })

    app.get("/skin", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        res.sendFile(path.resolve("mvc/views/exemplo.html"))
    })

    app.post("/registrarskin", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

        console.log(req.body)

        res.send('ok')

    })


}

