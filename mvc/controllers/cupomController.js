
//pacotinho pra você trabalhar com caminho de arquivos, como ele você pode chegar
//em qualquer diretório ou arquivo de boa, você vai ver ali embaixo.
const path = require('path')
const CupomDAO = require('../../DAO/cupomDAO')


//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {   

   
    app.get("/cupom", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        res.sendFile(path.resolve("mvc/views/ctrldev/addcupons.html"))
    })

    app.post("/registrarcupom", (req, res) => {
        
        const cupomDAO = new CupomDAO();
        res.setHeader("Access-Control-Allow-Origin","*")



        //Destructuring
        const {txtnomecupom, txtcodcupom, dtval, txtvalorcupom } = req.body

        cupomDAO.registrarCupom(txtnomecupom, txtcodcupom, dtval, txtvalorcupom)

        res.status(201).json({ 
            msg: "ok"
        })

    })
}

