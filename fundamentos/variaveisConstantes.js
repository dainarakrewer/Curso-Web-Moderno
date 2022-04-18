var a = 3
let b = 4

var a = 30
b = 40
/*o var deixa que o 'a' seja setado mais de uma vez, enquanto o let não deixa
utilizando apenas o 'b', sem var nem let, o b é setado mais de uma vez corretamente
*/
console.log(a,b)

a = 300
b = 400

console.log(a,b)

//a const só pode ser setada uma vez
const c = 5
//c = 50
console.log (c)