const sequencia = {
    //convenção - avisa que só deve ser acessada internamente - ou seja, acessar por get e set
    _valor: 1,
    get valor() {
        return this._valor++
    },
    //pode aplicar algum tipo de validação
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

//1 2
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
//1000 1001
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
//1002 1003
console.log(sequencia.valor, sequencia.valor)

