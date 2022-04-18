const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]
//7.3 = acumulador 9.2 = atual
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador, atual)
    // soma dos valores acima = 16.5 9.8
    // soma dos valores acima = 26.3 8.7
    return acumulador + atual
})