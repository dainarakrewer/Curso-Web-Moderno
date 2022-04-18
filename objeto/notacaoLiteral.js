const a = 1
const b = 2
const c = 3

//antigo
const obj1 = {a: a, b: b, c: c}

//atual
const obj2 = {a, b, c}
//{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

//antigo
const obj3 = {}
obj3[nomeAttr] = valorAttr
//{ nota: 7.87 }
console.log(obj3)

//atual
const obj4 = {[nomeAttr]: valorAttr}
//{ nota: 7.87 }
console.log(obj4)

const obj5 = {
    //antigo
    funcao1: function () {
        //    ...
    },
    //atual
    funcao2() {
        //    ...
    }
}
//{ funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5)