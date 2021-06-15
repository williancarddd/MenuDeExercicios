/**Crie um algoritmo que, dados os lados de um triângulo informados pelo usuário, calcule asua área */


var  classPrincipal = require("readline-sync")
var altura = Number(classPrincipal.question('altura do triangulo: '))
var base = Number(classPrincipal.question('base do triangulo: '))



console.log('A area de triangulo é: '+((base*altura)/2) )
