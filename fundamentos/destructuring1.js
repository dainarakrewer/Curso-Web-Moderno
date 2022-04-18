const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Teste',
        numero: 1000
    }
}

//tire de dentro do objeto, os atributos nom e idade
const { nome, idade } = pessoa
console.log(nome, idade)

//crie variáveis com o nome n recebendo nome e com nome i recebendo idade
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, teste = true } = pessoa
//resultado: undefined e true
console.log(sobrenome, teste) 

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) 

/*Erro
const { conta: { ag, num} } = pessoa
console.log(ag, num) */
