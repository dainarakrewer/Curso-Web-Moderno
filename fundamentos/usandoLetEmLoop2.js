const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//Memória do bloco
//2
funcs[2]()
//8
funcs[8]()