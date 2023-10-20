const SkinDAO = require("../../DAO/skinDAO")

module.exports = (app) => {

    app.get("/getSkin", async (req, res) => {
       const skinDAO = new SkinDAO()

       res.json(await skinDAO.consultarSkins())
    })

}

