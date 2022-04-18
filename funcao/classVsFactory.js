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
p1.falar()

const pessoa = nome => {
    return {
        //contexto léxico - sem this ao acessar nome
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Maria')
p2.falar()
