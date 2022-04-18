const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
// 3 3 - sem cache
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
// 1 3 - com cache
console.log(contadorD.valor, contadorC.valor)