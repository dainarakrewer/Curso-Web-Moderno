//Minha tentativa
function Calc (x, y){
    this.x = x
    this.y = y

    this.soma = function (){
        console.log(`A soma dos valores é ${x + y}`)
    }

    this.sub = function (){
        console.log(`A subtração dos valores é ${x - y}`)
    }

    this.mult = function(){
        console.log(`A multiplicação dos valores é ${x * y}`)
    }

    this.div = function (){
        console.log(`A divisão dos valores é ${x / y}`)
    }
}

const val = new Calc(4, 2)
val.soma()
val.sub()
val.mult()
val.div()
