const mysql = require("mysql2")

class Database{

    #connection 

    constructor(){

        //Configuração do banco
        this.#connection = mysql.createPool({
            host: "localhost",
            user:"root",
            password:"",
            database:"bdgl"
        }).promise()
    }
   
    async selecionarSkins(){
       const skinsData = await this.#connection.query("select * from skins;")
       return skinsData[0]
    } 

    async insertCupom(nome, codigo, validade, valor){
       const retorno = await this.#connection.execute(`
        INSERT INTO cupons (codigo_cupon, nome_cupon, validade_cupon, valor_cupom) VALUES
        ('${codigo}', '${nome}', '${validade}', ${valor});
      `)
    }

    async insertSkin(categoria, nome, descricao, genero, valor, raridade, foto1, foto2, promocao){
        const sql = `
        insert into skins (categoria_skin, nome_skin, descr_skin,
            genero_skin, valor_skin, raridade_skin, foto1_skin, foto2_skin,
            promocoes_id_promocao) 
            values ('${categoria}','${nome}','${descricao}','${genero}',
            ${valor}, '${raridade}','${foto1}','${foto2}',${promocao})
        `
        const bd = await this.#connection.execute(sql)
        return bd[0]

    }

}

module.exports = Database