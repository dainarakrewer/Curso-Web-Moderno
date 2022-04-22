let p = new Promise(function (resolve){
    //resolve(3) - Um valor

    // resolve({ - Dois valores
    //     x: 3,
    //     y: 4
    // })

    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

// Várias Linhas
// p.then(function (valor) {
//     console.log(valor)
// })

// Um then
// p.then(valor => console.log(valor))

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra =>letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

