//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

//5
imprimirSoma(2, 3)
//NaN
imprimirSoma(2)
//Apenas pegando os dois primeiros
imprimirSoma(2, 3, 4, 5, 6)
//NaN
imprimirSoma()

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
//NaN
console.log(soma())