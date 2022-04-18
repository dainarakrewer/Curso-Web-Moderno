const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)

//verifica se o peso 1 é Inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 * avaliacao2 * peso2
const media = total / (peso1 + peso2)

//mantém a media com apenas duas casas após o ponto
console.log(media.toFixed(2))

//transformando media em string
console.log(media.toString())

//transformando media em binário
console.log(media.toString(2))