function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
//NaN
console.log(getPreco())
//3900.65
console.log(produto.getPreco())

const carro = { preco: 4990, desc: 0.20}

//passando direto os parametros pelo call - primeiro o contexto
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))

//passando parametros dentro de um array
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$']))