const Cupom = require("../mvc/models/cupomModel");
const Database = require("../repository/database");

class CupomDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarCupons() {

        const lista_cupom = []
        const cupoms = await this.#conexao.selecionarCupons()

        if (cupoms) {
            for (const cupom of cupoms) {
                const objcupom = new Cupom()

                objcupom.id = cupom.id_cupon
                objcupom.codCupom = cupom.codigo_cupon
                objcupom.nomeCupom = cupom.nome_cupon
                objcupom.validadeCupom = cupom.validade_cupon
                objcupom.valorCupom = cupom.valor_cupom


                lista_cupom.push(objcupom.toJson())
            }
        }

        return lista_cupom
    }

    registrarCupom(nome, codigo, validade, valor){

        const cupom = new Cupom()

        cupom.nomeCupom = nome
        cupom.codCupom = codigo
        cupom.validadeCupom = validade
        cupom.valorCupom = valor

        this.#conexao.insertCupom(cupom.nomeCupom, cupom.codCupom, cupom.validadeCupom, cupom.valorCupom)
    }

    async apagarCupom(id){
     const dados =  await this.#conexao.deleteCupom(id)
     return dados
    }
}

module.exports = CupomDAO


