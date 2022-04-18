function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) {
    //criando um obj novo
    const obj = {}
    //associa o proto do obj com o prototype da função
    obj.__proto__ = f.prototype
    //executar a função f, passando o obj e os parametros
    f.apply(obj, params)
    //retorando obj criado
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
console.log(aula3, aula4)