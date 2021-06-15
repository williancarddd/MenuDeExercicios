/**joão  recebeu  seu  salário  de  R$  1200,00  e  precisa  pagar  duas  contas  (C1=R$200,00  e C2=R$120,00)  que  estão  atrasadas.  Como  as  contas  estão  atrasadas,  João  terá  de  pagar multa  de  2%  sobre  cada  conta.  Faça  um  algoritmo  que  calcule  e  mostre  quanto  restará  do salário do João */

var sjoao = 1200
var conta1Multa = (200*0.02) +200
var conta2Multa = (120*0.2) + 120

console.log(sjoao-(conta1Multa+conta2Multa))