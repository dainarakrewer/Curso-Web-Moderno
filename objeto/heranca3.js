const pai = { nome: 'Pedro', corCabelo: 'preto' }
//cria um objeto novo tendo o protótipo pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
//preto
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
//Bia
console.log(filha2.nome)
//[ 'nome' ]
//[ 'nome' ]
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//nome
//corCabelo
for (let key in filha2) {
    // console.log(key)
    //propriedade pertence a ela?
    filha2.hasOwnProperty(key) ?
        //nome
        //Por herança: corCabelo
        console.log(key) : console.log(`Por herança: ${key}`)
}