let comparaComThis = function (param){
    console.log(this === param)
}

//true
comparaComThis(global)
//false
comparaComThis(this)

const obj = {}
//this aponta para o obj por causa do "bind"
comparaComThis = comparaComThis.bind(obj)
//false
comparaComThis(global)
//true
comparaComThis(obj)

//dentro do módulo do node
let comparaComThisArrow = param => console.log(this === param)
//false
comparaComThisArrow(global)
//true
comparaComThisArrow(this)
//false
comparaComThis(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
//false
comparaComThisArrow(obj)
//true
comparaComThisArrow(module.exports)