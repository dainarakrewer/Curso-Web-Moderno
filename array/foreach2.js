Array.prototype.forEach2 = function (callback){
    for (let i = 0; i < this.length; i++){
        //(this[i]) - this acessando o índice i, (i) = O próprio i e (this) - O array completo
        //1) Agatha
        //2) Aldo
        //3) Daniel
        //4) Raquel
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice){
    //1) Agatha
    //2) Aldo
    //3) Daniel
    //4) Raquel
    console.log(`${indice + 1}) ${nome}`)
})