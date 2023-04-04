const express = require('express')
const app = express()

app.use((req, res) => {
    res.json({
        name: 'iPad 32GB',
        price: 1899.80,
        discount: 0.12
    })
    // res.send('Estou bem')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})