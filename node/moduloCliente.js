const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

//Fala Pessoal
console.log(moduloA.ola)
//Bem Vindo ao Node!
console.log(moduloA.bemVindo)
//Até o próximo exemplo
console.log(moduloA.ateLogo)
//{
//   ola: 'Fala Pessoal',
//   bemVindo: 'Bem Vindo ao Node!',
//   ateLogo: 'Até o próximo exemplo'
// }
console.log(moduloA)

//Bom dia
console.log(moduloB.bomDia)
//Boa noite
console.log(moduloB.boaNoite())
//{ bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
console.log(moduloB)
