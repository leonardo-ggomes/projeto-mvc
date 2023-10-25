const mysql = require("mysql2")

class Database{

    #connection 

    constructor(){
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

}

module.exports = Database