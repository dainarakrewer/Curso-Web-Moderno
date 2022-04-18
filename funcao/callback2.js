const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem o callback
let notasBaixasSCallback = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixasSCallback.push(notas[i])
    }
}

console.log(notasBaixasSCallback)

//Com o callback
notasBaixasCCallback = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixasCCallback)

//Com Arrow

/* Minha tentativa
const notasBaixasCArrow = notas.filter(nota => { return nota < 7})*/

const notasBaixarCArrow = notas.filter(nota => nota < 7)
console.log(notasBaixarCArrow)