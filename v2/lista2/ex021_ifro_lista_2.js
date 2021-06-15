//ex021_ifro_lista_2.js
/*Num determinado Estado, para transferências deveículos, o DETRAN cobra uma taxade 1% para carros fabricados antes de 1990 e uma taxade 1.5% para os fabricados de1990 em diante, taxa esta incidindo sobre o valorde tabela do carro. O algoritmo abaixo lê oano e o preço do carro e a seguir calcula e imprimeimposto a ser pago
 */

//recber o ano do carro
//recber valor do carro
//criar a variavel que armazenará a taxa
//verificar se o ano carro é menor que 1990
//--se for: a taxa recebe 1% do valor do carro
//--se não for: a taxa recebe 1.5% do valor do caro
//imprir o valor do carro e sua respectiva taxa/imposto


var receberDados = require('readline-sync')

var anoCarro = Number(receberDados.question("Digite o ano do carro: "))
var valorCarro = Number(receberDados.question("Digite o valor do carro: "))

var valorTaxa = 0
if (anoCarro < 1990){
    valorTaxa = valorCarro*0.01

}else{
    valorTaxa = valorCarro*0.15
}

console.log(`O imposto sobre o valor de ${valorCarro.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})} é ${valorTaxa.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}`)