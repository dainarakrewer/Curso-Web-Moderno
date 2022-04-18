const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

const template = `
    Olá
    ${nome}!
`

console.log(concatenacao, template)

//resultado é 1 + 1 = 2
console.log(`1 + 1 = ${1 + 1}`)

//Passando texto como paramêtro e assim transformando em letra maiúscula
const up = texto => texto.toUpperCase()

//chamando a função up dentro da expressão
console.log(`Ei... ${up('cuidado')}!`)