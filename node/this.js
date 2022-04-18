//false
console.log(this === global)
console.log(this === module)

//true
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    //false
    console.log(this === exports)
    console.log(this === module.exports)
    //true
    console.log(this === global)
}
logThis()