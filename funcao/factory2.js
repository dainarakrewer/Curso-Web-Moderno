/*Minha tentativa
function criarProduto(){
    return {
        nome: '',
        preco: 0,
        desconto: 0.20
    }
}*/

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Celular', 2000.49))