const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

//[ 2, 4, 6, 8, 10 ][ 1, 2, 3, 4, 5 ]
console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
//converto elemento para real, com duas casas decimais e substitui o ponto por vírgula
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
//[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
console.log(resultado)
