function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando', 0.1)
    .then(v => console.log(`Valor: ${v}`))
    .then(v => consol.log(v),
        err => console.log(`Erro Específico: ${err}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))