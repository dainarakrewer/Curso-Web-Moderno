const escola = "cod3r"

console.log(escola.charAt(4))

//Vazio
console.log(escola.charAt(5))

//valor dentro da tabela ASC - Código HTML
console.log(escola.charCodeAt(3))

//Existe o número 3 dentro de escola
console.log(escola.indexOf('3'))

//Do índice 1 até o fim da string
console.log(escola.substring(1))

//Do índice 0 até o índice 2 (não conta o 3)
console.log(escola.substring(0, 3))

//concatenar
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + ("!"))

//substituição
console.log(escola.replace(3, 'e'))

//criando array
console.log('Ana,Maria,Pedro'.split(','))