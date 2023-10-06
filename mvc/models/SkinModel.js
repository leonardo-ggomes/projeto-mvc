class Skin{

    id
    nome
    descricao
    categoria
    foto1

   
    constructor(id, nome, descricao, categoria, foto1){
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.categoria = categoria
        this.foto1 = foto1
    }

    toJson(){

        return{
            "id":this.id,
            "nome":this.nome,
            "descricao":this.descricao,
            "categoria": this.categoria,
            "foto1": this.foto1
        }
       
        
    }
}

module.exports = Skin