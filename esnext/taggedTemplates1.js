// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores){
    //[ '', ' está ', '.' ]
    console.log(partes)
    //[ 'Gui', 'Aprovado' ]
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
//Outra string
console.log(tag `${aluno} está ${situacao}.`)