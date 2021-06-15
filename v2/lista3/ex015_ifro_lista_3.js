var readline = require('readline-sync')

var n = Number.parseInt(readline.question('Digite um numero: '))

var cont = 0
for(var x = 1; x <= n; x++){
    if (n % x == 0  ){
        cont++
    }
}

if (cont == 2 ){
    console.log('O número informado é primo.')

} else {
    console.log('O número informado não é primo.')
}