const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(1)
//Reprovado
imprimirResultado('Epa!')