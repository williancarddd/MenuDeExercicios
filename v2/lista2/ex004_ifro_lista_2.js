/*
*Crie um algoritmo que, dado o nível de alerta de risco, imprima se ele for GRAVE. O nívelde alerta é um número que varia de 0 a 10. O nívelé considerado GRAVE quando ele ésuperior a 9 */
//ler o número de risco
//armazenar o número de risco em uma variavel
//validar o número de risco entre 1 e 10
//verificar se o número é maior ou igual a 9
//se o número não seguir nenhuma condição anterior, ele não é maior que 9 e nem está fora no range especificado.


var classePrincipal = require('readline-sync')
var valorAlerta = Number(classePrincipal.question("Nivel de risco: "))

//CORES
var verde =' \033[32m'
var vermelho = '\033[31m'
var restaura = '\033[0;0m'

if (valorAlerta < 1 || valorAlerta > 10){ // se o valor de alerta for menor que 1 e maior que 10 >> ele não faz parte de um nivel de risco
    console.log(`O numero ${valorAlerta} nao corresponde a um nivel de risco.`)

}
else if (valorAlerta >=9 ){
    console.log(vermelho+' O RISCO É CONSIDERADO GRAVE. '+restaura)
}
else{

    console.log(verde+' O RISCO ESTÁ EM UMA MARGEM DE SEGURANCA'+restaura)// não consegui usar 'ç'
}