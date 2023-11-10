//Reusa as funções desse arquivo localizado em ../../DAO/skinDAO, lembre-se de fazer
// o module.exports lá no arquivo que você está chamando, se não vai dar erro.
const SkinDAO = require("../../DAO/skinDAO")

//pacotinho pra você trabalhar com caminho de arquivos, como ele você pode chegar
//em qualquer diretório ou arquivo de boa, você vai ver ali embaixo.
const path = require('path')

//Lembra que você usou o consign no startup? Então, nem tudo é mamão com acucar
//Você precisa fazer isso para usar o app do startup. O app é exatamente o app de lá
module.exports = (app) => {

    //Significa que você vai responder alguém quando você foi chamado na url
    // localhost:3000/getSkin do navegador
    app.get("/skins", async (req, res) => {
       const skinDAO = new SkinDAO()

       //Você tem que fazer isso para os outros conseguirem acessar sua aplicação.
       //Repita essa configuração para as rotas que você quer liberar para ser acessada
       //por outras pessoas.
       res.setHeader("Access-Control-Allow-Origin","*")

       //Retorna os dados
       res.json(await skinDAO.consultarSkins())
    })

    app.get("/pagina/skin", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        res.sendFile(path.resolve("mvc/views/ctrldev/addskins.html"))
    })

    //Diferente do Get, o post é pra receber dados. Aqui você em vez de enviar
    // vai receber, lembra do formulario do Ze da Manga que eu fiz na sala?
    app.post("/registrarskin", async (req, res) => {
        
        res.setHeader("Access-Control-Allow-Origin","*")

        //Destructuring
        const { 
            txtnomeskin,
            selrarskin,
            selcatskin,
            selgenskin,
            filefoto1skin,
            filefoto2skin, 
            txtvalorskin,
            txtdescskin,
        } = req.body

        const skinDAO = new SkinDAO()

        const data = await skinDAO.cadastrarSkin(selcatskin, txtnomeskin, txtdescskin,selgenskin,txtvalorskin,selrarskin,filefoto1skin,filefoto2skin,1)

        res.json(data)

    })

   

   



}

