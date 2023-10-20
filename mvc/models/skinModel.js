const Db = require("../../repository/database.js");

class Skin{

    #nome 
    #descricao 
    #raridade     
  
    constructor(nome, descricao, raridade){
        this.#nome = nome
        this.#descricao = descricao
        this.#raridade = raridade
    }

    get nome(){
        return this.#nome;
    }

    set nome(valor){
        this.#nome = valor;
    }

    toJson(){
        return {
            "nome": this.#nome
        }
    }
}


module.exports = Skin