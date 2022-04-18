// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
// {nome: 'Pedro'}
console.log(pessoa)

// pessoa -> 456 -> {...}
//só pode atribuir uma única vez - ERRO
// pessoa = {nome: 'Ana'}

// congelando o objeto pessoa - não consegue mais mexer no objeto
Object.freeze(pessoa)

//não consegue mais mudar pois está congelado
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
// pessoa = {nome: 'Pedro'}
console.log(pessoa.nome)
//pessoa.end não vem e não excluiu
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
//{ nome: 'Joao' }
console.log(pessoaConstante)