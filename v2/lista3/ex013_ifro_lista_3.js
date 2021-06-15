
var readline = require('readline-sync')
var mairoM = 0
var menorM = 0
var somaN = 0
var auxi = 0

while (true){
    var n = Number.parseInt(readline.question("Digite a media: "))
    if (n < 0){
        break
    } else {
        auxi++
        somaN += n
        if (auxi == 1){
            mairoM = menorM = n
        } else {
            if (mairoM < n){
                mairoM = n
            }

            if (menorM > n ){
                menorM = n
            }
        }
    }
    
}

var media = somaN / auxi

console.log('maior média é: '+ mairoM)
console.log('menor média é: '+ menorM)
console.log('A média geral é: '+ media)