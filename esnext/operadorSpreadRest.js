// operador ... rest (juntar)/spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
//{ ativo: true, nome: 'Maria', salario: 12348.99 }
console.log(clone)

// usar spread com array
const grupoA = [ 'João', 'Pedro', 'Gloria']
const grupoFinal = [ 'Maria', 'Rafaela', ...grupoA]
//[ 'Maria', 'Rafaela', 'João', 'Pedro', 'Gloria' ]
console.log(grupoFinal)