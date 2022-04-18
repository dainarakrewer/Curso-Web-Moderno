//true
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
//{ a: 1, b: 2, c: 3 }
console.log(module.exports)