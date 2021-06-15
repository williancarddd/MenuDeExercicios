


var receber = require("readline-sync")


//variaveis para comparação
var maior = 0 
var menor = 0

for(var index = 1; index <= 15; index++){
    
    var valorUsuario = Number(receber.question(`${index} Digite um numero: ` ))

    if ( index == 1 ){ // se for o primeiro numero digitado pelo  o usuario , as variaveis maior e menor recebem o primeiro valor digitado pelo usuario.
        maior =  valorUsuario
        menor = valorUsuario

    } else { // caso não seja o primeiro numero digitado pelo usuario
        if (valorUsuario > maior){// verifico se o valor digitado é maior que o valor anterior
            maior = valorUsuario

        }
        if (valorUsuario < menor) {
            menor = valorUsuario
        }


    }
    
}


console.log(menor)
console.log(maior)