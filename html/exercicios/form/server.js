const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.urlencoded())

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('Parabéns')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.#id)
    console.log(req.body)
    resp.send('Parabéns. Usuário Alterado!')
})

app.listen(3003)