const schedule = require('node-schedule')

// */5 (5 em 5 segundos) * 11 (a partir das 11 horas) * * 2 (de terça-feira)
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 2', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})