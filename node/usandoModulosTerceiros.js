//referencia o lodash com _
const _ = require('lodash')
//a cada 2 segundos, gera um número aleatório de 1 a 1000
//terminal node -> nodemon usandoModulosTerceiros.js
setInterval(() => console.log(_.random(1, 10)), 2000)