const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//Valor que saiu do bloco
//10
funcs[2]()
//10
funcs[8]()