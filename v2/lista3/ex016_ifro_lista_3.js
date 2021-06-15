var readline = require('readline-sync')

function verificarPrimo(num){
    var cont = 0
    for(var x = 1; x <= num; x++){
        if (num % x == 0  ){
            cont++
        }
    }

    if (cont == 2 ){
        console.log(`${num} primo.`)

    } 
}

var n = Number.parseInt(readline.question('Digite um numero: '))

for (var z = 1; z <= n;  z++){
    verificarPrimo(z)
}