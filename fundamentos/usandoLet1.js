var numero = 1
{
    let numero = 2
    //2 - Procurando no escopo interno depois no externo
    console.log('Dentro = ', numero)
}
//1
console.log('Fora = ', numero)