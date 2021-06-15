var readline = require('readline-sync')

var n = Number.parseInt(readline.question('Digite um numero: '))
var arrayP = []
var arrayI = []
for(var x = 1; x <= n; x++){
    if(x % 2 == 0){
        arrayP.push(x)
    } else {
        arrayI.push(x)
    }
}

console.log('Números pares da sequência: '+arrayP)
console.log('Números impares da sequência: '+ arrayI)