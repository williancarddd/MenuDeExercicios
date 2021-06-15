//ex005_ifro_lista_1.js
/*Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida  respectivamente  por  10,  12  e  15  reais.  Construa  um  algoritmo  em  que  o  usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado */


var valorP = 10 
var valorM = 12
var valorG = 15

var qntP = 5
var qntM = 2
var qntG = 4

var valorCompra  = ((valorP*qntP)+(valorM*qntM)+(valorG*qntG))
console.log('o valor arrecadado será: '+ valorCompra.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))