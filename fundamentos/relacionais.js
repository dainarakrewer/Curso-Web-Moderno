//true - String 1 é igual a number 1 - apenas valor
console.log('01:', '1' == 1)

//false - String 2 é estritamente igual a number 1 - valor e tipo
console.log('02:', '1' === 1)

//false - String 3 é igual a number 3 - apenas valor
console.log('03:', '3' != 3)

//true - String 3 é estritamente diferente a number 3 - valor e tipo
console.log('04:', '3' !== 3)

console.log('05:', 3 < 2)
console.log('06:', 3 > 2)
console.log('07:', 3 <= 2)
console.log('07:', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
//false
console.log('09:', d1 === d2)
console.log('10:', d1 == d2)
//Numbers: estritamente iguais
console.log('11:', d1.getTime() === d2.getTime())

//true
console.log('12:', undefined == null)
//false
console.log('13:', undefined === null)


