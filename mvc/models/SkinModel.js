class Skin{

    id
    nome
    descricao

   
    constructor(id, nome, descricao){
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    toJson(){

        return{
            "id":this.id,
            "nome":this.nome,
            "descricao":this.descricao
        }
       
        
    }
}

module.exports = Skin