const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.urlencoded())

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('Parabéns')
})

app.listen(3003)