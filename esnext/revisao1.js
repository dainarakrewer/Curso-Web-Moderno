//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
//l = C, e = o, ...tras = d3r
const [l, e, ...tras] = "Cod3r"
//C o [ 'd', '3', 'r' ]
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome)
