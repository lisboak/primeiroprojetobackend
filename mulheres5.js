const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const mulheres = [
    {
        nome: "Simara Conceicao",
        imagem: "https://bit.ly/3LJIyOF",
        minibio: "Desenvolvedora e Instrutora"
    },
    {
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "Fundadora da Programaria"

    },
    {
        nome: "Ninda da Hora",
        imagem: "https://bit.ly/3FKpFaz",
        minibio: "Hacker antirracista"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("a porta é ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)