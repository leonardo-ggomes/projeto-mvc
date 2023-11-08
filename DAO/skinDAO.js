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

    async cadastrarSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2, promocao){
        
       const status = await this.#conexao.insertSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2, promocao)
       console.log("Total de erros em cadastrarSkin: "+status.warningStatus)
       return status.insertId
    }
}

module.exports = SkinDAO


