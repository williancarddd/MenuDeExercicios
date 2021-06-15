//  gerar os n primeiros numeros sequencia fibonacci
//  1 1 2 3 5 6
//  x y  z
// x = y
// y = z

var readline = require("readline-sync")
var n = readline.question("Digite um numero: ")
var x  = y = 1
var z = 0
for (var j =  1; j <= n; j++){
    x = y
    y = z

    var z = x + y
    console.log(`o ${j} termo é : `+ z)
}