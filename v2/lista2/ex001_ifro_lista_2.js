/*Crie um algoritmo que, dado dois números informadospelo usuário, informe a somadeles*/
//ler o primeiro número do usuário
//ler o segundo número do usuário
//somar os dois números informados
//imprir o valor na tela

var classMain = require('readline-sync')

var value1 = Number(classMain.question('Digite um numero: '))
var value2 = Number(classMain.question('Digite outro numero: '))

console.log(`a soma dos dois número é: ${(value1+value2)}`)