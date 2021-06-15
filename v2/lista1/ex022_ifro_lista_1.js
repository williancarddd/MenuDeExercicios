/*Pedrinho  tem  um  cofrinho  com  muitas  moedas,  e  deseja  saber  quantos  reais  conseguiu poupar.  Faça  um  algoritmo  para  ler  a  quantidade  de  cada  tipo  de  moeda,  e  imprimir  o  valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero */

var qmoeda1c = 0
var qmoeda5 = 20
var qmoeda10 = 20
var qmoeda25 = 30
var qmoeda50 = 50
var qmode1real = 100

var valorCofre = (qmode1real*1) +(qmoeda5*0.05)+(qmoeda10*0.1)+(qmoeda1c*0.01)+ (qmoeda25*0.25)+(qmoeda50*0.5)
console.log(`o cofrinho possui ${valorCofre.toLocaleString('pt-br', {style:"currency", currency:'BRL'})} reais`)