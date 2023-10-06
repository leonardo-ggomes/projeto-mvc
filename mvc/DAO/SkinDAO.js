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

            skin.id = query[index].SKI_ID
            skin.descricao = query[index].SKI_NOME
            skin.quantidade = query[index].SKI_DESCRICAO

            list_skins.push(skin.toJson())     
        }
       
        return list_skins
    }

}


module.exports = SkinDAO