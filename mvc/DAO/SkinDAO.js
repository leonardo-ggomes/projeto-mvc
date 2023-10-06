const Skin = require('../models/SkinModel')
const Db = require('../../repository/Database')

class SkinDAO{

    #db

    constructor(){
        this.#db = Db
    }

    async consultarTodos(){

        let list_skins = []

        const query = await this.#db.selectSkins()

        for (let index = 0; index < query.length; index++) {

            const skin = new Skin()

            skin.id = query[index].id_skin
            skin.descricao = query[index].nome_skin
            skin.quantidade = query[index].descr_skin
            skin.categoria = query[index].categoria_skin
            skin.foto1 = query[index].foto1_skin

            list_skins.push(skin.toJson())     
        }
       
        return list_skins
    }

}


module.exports = SkinDAO