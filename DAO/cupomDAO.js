const Cupom = require("../mvc/models/cupomModel");
const Database = require("../repository/database");

class CupomDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarCupom() {

        const lista_cupom = []
        const cupoms = await this.#conexao.selecionarCupom()

        if (cupoms) {
            for (const cupom of cupoms) {
                const objcupom = new Cupom()

                objcupom.codCupom = cupoms.codigo_cupom
                objcupom.nomeCupom = cupoms.nome_cupom
                objcupom.validadeCupom = cupoms.validade_cupom
                objcupom.valorCupom = cupoms.valor_cupom


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
}

module.exports = CupomDAO


