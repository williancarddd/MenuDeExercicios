var readline = require('readline-sync')
var n = Number.parseInt(readline.question("digite um numero para tabuada: "))

for ( var x = 1; x <= n; x ++){
    console.log(`${n}x${x} = ${n*x}`)
}