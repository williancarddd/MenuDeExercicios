var realine = require('readline-sync')

var inicial = Number.parseInt(realine.question('valor que deseja analisar: '))

var acumulador = 1
for (var x = 1; x <= inicial; x++){
    acumulador *= x
    console.log('\r' +acumulador)
}