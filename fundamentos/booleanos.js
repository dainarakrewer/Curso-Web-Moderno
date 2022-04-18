let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//o 1 representa o resultado verdadeiro (true)
isAtivo = 1
console.log(!!isAtivo)

//o 1 representa o resultado falso (false)
console.log(!isAtivo)

console.log('os verdadeiros...')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
//|| = OU
console.log(!!('' || null || 0 || 'epa'))

let nome = ''

//Se nome não for preenchido, mostrar Desconhecido
console.log(nome || 'Desconhecido')