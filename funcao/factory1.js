const prod1 = {
    nome: 'Teste',
    preco: 45
}

//Factory simples - retorna um objeto
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())