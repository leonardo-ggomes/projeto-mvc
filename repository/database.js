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

}

module.exports = Database