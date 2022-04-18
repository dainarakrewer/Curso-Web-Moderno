// function declaration - primeiro carrega a função dps executa o código
console.log(soma(3, 4))

function soma(x, y){
    return x + y
}

//function expression
//console.log(sub(3, 4)) - ERRO

const sub = function (x, y){
    return x - y
}

console.log(sub(3, 4))

//named function expression - pouco usada
//console.log(mult(3, 4)) - ERRO

const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 4))