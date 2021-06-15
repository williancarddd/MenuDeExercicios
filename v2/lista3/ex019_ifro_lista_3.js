//media
// quantidade numero negativo
// quantidade numero positivo
//porcentagem numero negativo
//porcentagem numero positivo

var readline = require('readline-sync')

var qntdN = 0
var qntdP = 0
var soma = 0
while(true){
    var n = Number.parseInt(readline.question("Digite um numero (0 para): "))
    if (n == 0){
        break
    } else {
        if (n > 0){
            qntdP++
        } else {
            qntdN++
        }
        soma += n
    }
}

var total = qntdN+qntdP
var media = (soma/(total))
var pP = (qntdP / total)*100
var pN = (qntdN / total)*100


console.log('A média dos números é: '+ media)
console.log('A quantidade de números negativos é: '+ qntdN)
console.log('A quantidade de números positivos é: '+ qntdP)
console.log('A porcentagem de números negativos é: '+ pN+'%')
console.log('A porcentagem de números positivos é: '+pP+'%')
