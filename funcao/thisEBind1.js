const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
    // Sem o THIS dará erro
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
//undefined
falar()

//THIS será resolvido para pessoa a partir do bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()