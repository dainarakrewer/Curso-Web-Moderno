const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})
//undefined
//console.log(tecnologias.react)
//{ framework: false }
//false
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    // [Function (anonymous)] Função
    // {} Objeto
    // 123 Número
    console.log(ch, vl)
})

//true
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
//false
console.log(chavesVariadas.has(123))
//2
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
// Map(3) {
//     [Function (anonymous)] => 'Função',
//         {} => 'Objeto',
//         123 => 'b'
// }
console.log(chavesVariadas)