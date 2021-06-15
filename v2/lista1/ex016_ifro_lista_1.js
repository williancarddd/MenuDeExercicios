/*A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de  queijo,  uma  fatia  de  presunto  e  uma  rodela  de  hambúrguer.  Sabendo  que  cada  fatia  de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra */

var quantiaSanduiche = 150

var pesoQueijo_1h = 100
var pesoPresunto_1h = 50
var pesoHambuerguer_1h = 100

console.log(`a quantidade de queijo em quilos é ${(pesoQueijo_1h*quantiaSanduiche)/1000}kg\n
a quantidade de presunto em quilos é ${(pesoPresunto_1h*quantiaSanduiche)/1000}kg\n
a quantidade de hamburguer em quilos é ${(pesoHambuerguer_1h*quantiaSanduiche)/1000}kg\n
`)