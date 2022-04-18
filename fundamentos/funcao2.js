//Armazenando uma função em uma var
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma função arrow em uma var / => é uma function
const soma = (a, b) => {
    return a + b
}

console.log(soma (2, 3))

//retorno implícito / sem chaves, a função só terá uma linha
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')