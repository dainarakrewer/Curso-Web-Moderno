for (let letra of "Cod3r"){
    // C
    // o
    // d
    // 3
    // r
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma){
    // 0
    // 1
    // 2
    console.log(i)
}

for (let assunto of assuntosEcma){
    // Map
    // Set
    // Promise
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap){
    // [ 'Map', { abordado: true } ]
    // [ 'Set', { abordado: true } ]
    // [ 'Promise', { abordado: false } ]
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    // Map
    // Set
    // Promise
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    // { abordado: true }
    // { abordado: true }
    // { abordado: false }
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()){
    // Map { abordado: true }
    // Set { abordado: true }
    // Promise { abordado: false }
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    // a
    // b
    // c
    console.log(letra)
}