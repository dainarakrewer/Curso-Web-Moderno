/*ClassVsFactory
class Pessoa {
    //Construtor da Classe
    constructor(nome) {
        //var nome se torna pública
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Dainara')
p1.falar()*/

//Minha Tentativa
function PessoaDainara (nome){
    this.nome = nome
    this.falar= function (){
        console.log(`Meu nome é ${nome}`)
    }
}

const pessoaDai = new PessoaDainara('Dainara')
pessoaDai.falar()

//Tentativa do Professor
function Pessoa (nome){
    this.nome = nome
    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }
}

const pessoaProf = new Pessoa('Professor')
pessoaProf.falar()