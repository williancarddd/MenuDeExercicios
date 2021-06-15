//ex005_ifro_lista_1.js

/*O  restaurante  a quilo  Bem-Bão  cobra  R$12,00  por  cada  quilo  de  refeição.  Escreva  um algoritmo que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato*/

var quiloRefeição = 12

var quiloAlimento = 2
var quiloTotal = quiloAlimento +quiloRefeição 
var valorPagar = (quiloTotal*quiloAlimento)
console.log(valorPagar.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))
