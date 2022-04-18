function triangulos (x, y, z){
    if (x === y && y === z){
        console.log('Este triângulo é equilátero!')
    } else if (x === y && y !== z){
        console.log('Este triângulo é isósceles!')
    } else if (x !== y && y !== z){
        console.log('Este triângulo é escaleno!')
    } else {
        console.log('Valor Inválido!')
    }
}

console.log(triangulos(3, 1, 3))