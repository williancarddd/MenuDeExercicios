/*
*Agora altere o algoritmo anterior de maneira que ele verifique os demais níveis de alerta.Considere: 0-3 é "BAIXO", maior que 3 até 6 "MÉDIO",maior que 6 até 9 "ALTO", para osdemais casos é considerado "GRAVE */

//ler o número de risco
//armazenar o número de risco em uma variavel
//validar o número de risco entre 1 e 10
//verificar se o número está entre 0 e 3: Baixo
//verificar se o nnúmero está entre 4 e 6: Médio
//verificar se o número está entre 6 e 9:Alto
//se o número não seguir nenhuma condição anterior, ele é Grave.


var classePrincipal = require('readline-sync')
var valorAlerta = Number(classePrincipal.question("Nivel de risco: "))
var verde = '\033[32m'
var vermelho = '\033[31m'
var restaura = '\033[0;0m'
var amarelo = '\033[33m'
var azul = '\033[34m'

if (valorAlerta < 0 || valorAlerta > 10){
    console.log(`O numero ${valorAlerta} nao corresponde a um nivel de risco.`)

}else if(valorAlerta >= 0 && valorAlerta <= 3){
    console.log(verde+'O RISCO É CONSIDERADO BAIXO'+restaura)

}else if(valorAlerta > 3 && valorAlerta <= 6){
    console.log(amarelo+ "O RISCO É CONSIDERADO MÉDIO"+restaura)

}else if (valorAlerta> 6 && valorAlerta<=9){
    console.log(azul+"O RISCO É CONSIDERADO ALTO"+restaura)
    
}else{
    console.log(vermelho+' O RISCO É CONSIDERADO GRAVE. '+restaura)
}
