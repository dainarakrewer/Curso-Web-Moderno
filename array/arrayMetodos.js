const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//remove o último elemento do array
pilotos.pop()
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
console.log(pilotos)

//adiciona último elemento no array
pilotos.push('Verstappen')
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(pilotos)

//remove o primeiro elemento do array
pilotos.shift()
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(pilotos)

//adiciona o primeiro elemento no array
pilotos.unshift('Hamilton')
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
console.log(pilotos)

//pode adicionar e remover elementos
//adicionando dois valores após o pilotos[2] e sem remover nenhum elemento
pilotos.splice(2, 0, 'Bottas', 'Massa')
//[ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
console.log(pilotos)

//removendo um elemento a partir de pilotos[3]
pilotos.splice(3, 1)
//[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
console.log(pilotos)

//cria um novo array a partir de pilotos[3]
const algunsPilotos1 = pilotos.slice(2)
//[ 'Bottas', 'Raikkonen', 'Verstappen' ]
console.log(algunsPilotos1)

//cria um novo array a partir de pilotos[1] e finalizando em pilotos[3]
const algunsPilotos2 = pilotos.slice(1, 4)
//[ 'Alonso', 'Bottas', 'Raikkonen' ]
console.log(algunsPilotos2)