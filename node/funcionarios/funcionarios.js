const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = funcionario => funcionario.genero === 'M'
const pais = funcionario => funcionario.pais === 'China'
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(mulher)
        .filter(pais)
        .reduce(salario)

    console.log(func)
})