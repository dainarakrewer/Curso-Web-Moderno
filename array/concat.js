const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)

//[ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ], [ 'Ualeskah', 'Cibalena' ], [ 'Uoxiton', 'Uesclei' ]
console.log(todos, filhas, filhos)

//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))