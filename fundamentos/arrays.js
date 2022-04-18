const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

//undefined
console.log(valores[4])

valores[4] = 10

console.log(valores[4])
console.log(valores)

console.log(valores.length)

//add valores
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//tirar o último valor do array
console.log(valores.pop())

//excluíndo o primeiro valor
delete valores[0]
console.log(valores)

//object
console.log(typeof valores)