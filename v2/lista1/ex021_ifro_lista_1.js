/*A  fábrica  de  refrigerantes  Meia-Cola  vende  seu  produto  em  três formatos:  lata  de  350  ml, garrafa  de  600  ml  e  garrafa  de  2  litros.  Se  um  comerciante  compra  uma  determinada quantidade de cada formato, faça um algoritmo para calcular  quantos litros de refrigerante ele comprou*/

var garrafas1 =  5
var garrafas2 = 155
var garrafas3 = 15

var lModelo1 = 350/1000
var lModelo2 = 600/100
var lModelo3 =  2000/1000

var litrosComprados = ((garrafas1*lModelo1)+(garrafas2*lModelo2)+(garrafas3*lModelo3))

console.log(`você comprou ${litrosComprados.toFixed(2)} litros`)