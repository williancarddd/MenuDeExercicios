var readline = require('readline-sync')
par = 0
impar = 0
while (true){
    var n = Number(readline.question("Digite um numero: "))
    if (n > 1000){
        break
    } else {
        if (n % 2 == 0){
            par += n
        } else  {
            impar += n
        }
    }
}

console.log('A soma dos números pares é: '+ par)
console.log('A soma dos números impares é: '+ impar)