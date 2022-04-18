//Cadeia de protótipos (prototype chain)
//Object.protytpe -> avo -> pai -> filho
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
//A B C
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }
}

const ferrari = {
    modelo: 'F40',
    //irá sobescrever o velMax de carro
    velMax: 324 //shadowing = sombreamento
}
const volvo = {
    modelo: 'V40',
    status(){
        //super = chamar o método do protótipo
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//{ modelo: 'F40', velMax: 324 }
console.log(ferrari)
//{ modelo: 'V40', status: [Function: status] }
console.log(volvo)

volvo.acelerarMais(100)
//V40: 100KM/H de 200KM/H
console.log(volvo.status())

ferrari.acelerarMais(300)
//300KM/H de 324KM/H
console.log(ferrari.status())