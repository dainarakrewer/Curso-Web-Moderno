const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice){
    //1) Agatha
    //2) Aldo
    //3) Daniel
    //4) Raquel
    console.log(`${indice + 1}) ${nome}`)
})

//Agatha
//Aldo
//Daniel
//Raquel
aprovados.forEach(nome => console.log(nome))

//Agatha
//Aldo
//Daniel
//Raquel
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)