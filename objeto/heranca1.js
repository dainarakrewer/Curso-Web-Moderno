const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
//[Object: null prototype] {}
console.log(ferrari.__proto__)
//true
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//undefined
console.log(Object.prototype.__proto__)

function meuObjeto() {}
//function function
console.log(typeof Object, typeof meuObjeto)
//[Object: null prototype] {} {}
console.log(Object.prototype, meuObjeto.prototype)