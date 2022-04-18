const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
//{
//   "db": {
//     "host": "localhost",
//     "port": 5432,
//     "user": "usuario",
//     "pass": "123456"
//   }
// }
console.log(conteudo)

// assíncrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    //localhost: 5432
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
//{ host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})