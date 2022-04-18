function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area} m2!`)
    } else {
        return area
    }
}

area(2, 4)
console.log(area(2, 2))
//NaN
console.log(area(2))
//NaN
console.log(area())
console.log(area(2, 2, 17, 22, 44))
console.log(area(5, 5))