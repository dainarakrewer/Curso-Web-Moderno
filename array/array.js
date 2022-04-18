//function object object
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
//[ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana']
//Bia
console.log(aprovados[0])
//Carlos
console.log(aprovados[1])
//Ana
console.log(aprovados[2])
//undefined
console.log(aprovados[3])

aprovados[3] = 'Paulo'
//Adicionando no array
aprovados.push('Abia')
//5
console.log(aprovados.length)

aprovados[9] = 'Rafael'
//10
console.log(aprovados.length)
//true
console.log(aprovados[8] === undefined)
//[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
console.log(aprovados)
//altera o array em ordem alfabética e deixa os vazios por último
aprovados.sort()
//[ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]
console.log(aprovados)

delete aprovados[1]
//undefined
console.log(aprovados[1])
//Bia
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//Começa pelo aprovados[1] e exclui um valor ('Carlos')
aprovados.splice(1, 1)
//[ 'Bia', 'Ana' ]
console.log(aprovados)
//Começa pelo aprovados[1] e exclui dois valores ('Carlos' e 'Ana')
aprovados.splice(1, 2)
//[ 'Bia' ]
console.log(aprovados)
//Começa pelo aprovados[1] e exclui dois valores ('Carlos' e 'Ana') e adiciona dois valores
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
//[ 'Bia', 'Elemento1', 'Elemento2' ]
console.log(aprovados)
//Começa pelo aprovados[1] e exclui nenhum valor e adiciona dois valores a partir do índice 1
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
//[ 'Bia', 'Elemento1', 'Elemento2', 'Elemento1', 'Elemento2' ]
console.log(aprovados)