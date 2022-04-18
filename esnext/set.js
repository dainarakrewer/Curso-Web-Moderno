// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')
//Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times)
//5
console.log(times.size)
//false
console.log(times.has('vasco'))
//true
console.log(times.has('Vasco'))

times.delete('Flamengo')
//false
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
//Set(3) { 'Raquel', 'Lucas', 'Julia' }
console.log(nomesSet)