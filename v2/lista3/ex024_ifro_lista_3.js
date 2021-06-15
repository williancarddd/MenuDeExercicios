var realine = require('readline-sync')

var inicial = Number.parseInt(realine.question('valor inicial: '))
var razao = Number.parseInt(realine.question('razao: '))

for (var x = 1; x <= 10; x++){
    console.log('termo: '+ (inicial + (x*razao)))
}

