const mysql = require("mysql2")

class Database{

    connection 

    constructor(){
        this.connection = mysql.createConnection({
            host: "localhost",
            user:"root",
            password:"",
            database:"DBSTEAM"
        })
    }

    getConnection(){
        return this.connection
    }

}

module.exports = Database