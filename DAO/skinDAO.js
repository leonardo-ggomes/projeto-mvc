const Skin = require("../mvc/models/skinModel");
const Database = require("../repository/database");

class SkinDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarSkins() {

        const lista_skins = []
        const skins = await this.#conexao.selecionarSkins()

        if (skins) {
            for (const skin of skins) {
                const objSkin = new Skin()
                objSkin.nome = skin.nome_skin
                lista_skins.push(objSkin.toJson())
            }
        }

        return lista_skins
    }
}

module.exports = SkinDAO


