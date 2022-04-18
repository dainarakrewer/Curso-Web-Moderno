const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
// 10 9 undefined 0
console.log(n1, n3, n5, n6)

//ignore o primeiro elemento, -> vá pro segundo -> pegue o segundo elemento
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)