var readline = require('readline-sync')

function gerarSequencia(de, ate, num){
    flag = false
    for (vax = de; de <= ate; de++){
        if(num == de){
            flag = true
            break
        }
    }
    return flag
}

while(true){
    var n = Number.parseInt(readline.question('digite um numero para eu verificar: '))
    if (n < 0){
        break
    } else {
        if (gerarSequencia(0, 25, n)){
            console.log('o número digitado está em uma sequência de 0 a 25.')
        } 
        else if (gerarSequencia(26, 50, n)){
            console.log('o número digitado está em uma sequência de 26 a 50.')
        }
        else if (gerarSequencia(51, 75, n)){
            console.log('o número digitado está em uma sequência de 51 a 75.')

        } else if (gerarSequencia(76, 100, n)){
            console.log('o número digitado está em uma sequência de 76 a 100.')
        } else {
            console.log('Não está em nenhuma sequencia.')
        }

    }
}