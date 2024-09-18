const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Kelly Lisboa", 
        imagem: "https://media.licdn.com/dms/image/D4D03AQGwVPIxp_LO6A/profile-displayphoto-shrink_200_200/0/1719090057624?e=2147483647&v=beta&t=iMwXT8Vwka8t22SUliYZlkeOjPYRl6DJ6INALoS0iv0",
        minibio: "Em constante aprendizado"
    })
}
function mostraPorta() {
    console.log("a porta é " , porta)
}

app.use(router.get("/mulher4", mostraMulher))
app.listen(porta, mostraPorta)