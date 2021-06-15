
var receberDados = require('readline-sync')
var prod = 1
while (true) {
    var num = Number(receberDados.question("Digite um numero(aperte 0 para parar o progama) : "))
    if (num==0){
        break
    } else {
        prod *= num
    }
    

}

console.log('O produto dos números digitados é : '+prod)