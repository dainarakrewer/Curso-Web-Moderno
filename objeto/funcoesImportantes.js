const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
//[ 'nome', 'idade', 'peso' ]
console.log(Object.keys(pessoa))
//[ 'Rebeca', 2, 13 ]
console.log(Object.values(pessoa))
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    //nome: Rebeca
    // idade: 2
    // peso: 13
    console.log(`${e[0]}: ${e[1]}`)
})

//exemplo mais claro - desestruturando
Object.entries(pessoa).forEach(([chave, valor]) => {
    //nome: Rebeca
    // idade: 2
    // peso: 13
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    //enumera?
    enumerable: true,
    //sobescrevido?
    writable: false,
    value: '01/01/2019'
})
//não pode sobescrever
pessoa.dataNascimento = '01/01/2017'
//01/01/2019
console.log(pessoa.dataNascimento)
//[ 'nome', 'idade', 'peso', 'dataNascimento' ]
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a :1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//concatena o1 e o2 para o dest
const obj = Object.assign(dest, o1, o2)
//{ a: 4, b: 2, c: 3 }
console.log(obj)