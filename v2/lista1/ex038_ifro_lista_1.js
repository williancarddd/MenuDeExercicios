/**
 *  Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:  a)  a  idade  dessa  pessoa  em  anos;  b)  a  idade  dessa  pessoa  em  meses;  c)  a  idade dessa pessoa em dias; d) a idade dessa pessoa em semanas.
 */

var anoNascimento = 2002
var anoAtual = new Date().getFullYear()

var idade = (anoAtual-anoNascimento)
var idadeMesses = idade*12
var idadeDias = idadeMesses*30
var idadeSemanas = idadeDias/7
console.log('idade  dessa  pessoa  em  anos: ' + idade )
console.log('idade  dessa  pessoa  em  meses: '+ idadeMesses)
console.log('idade dessa pessoa em dias: '+ idadeDias)
console.log('idade dessa pessoa em semanas: '+idadeSemanas.toFixed(0))