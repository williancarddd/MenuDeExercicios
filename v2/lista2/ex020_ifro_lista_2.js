/**. Escrever um algoritmo que lê um valor em reais e calcule qual o menor número possívelde notas de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto. Escrever o valor lido e a relação de notas necessárias. */


var recebeDados = require('readline-sync')

var valor = Number(recebeDados.question('Digite o valor a ser contabilizado: '))

var notas100 = Math.floor(valor/100)
var notas50 = Math.floor((valor%100)/50)
var notas10 = Math.floor((valor%50)/10)
var notas5 = Math.floor((valor%10)/5)
var notas1 = Math.floor((valor%5)/1)

console.log(`100: ${notas100}
50: ${notas50}
10: ${notas10}
5: ${notas5}
1: ${notas1}`)