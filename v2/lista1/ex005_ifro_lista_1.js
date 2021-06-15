//ex005_ifro_lista_1.js

/* m motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler  o  preço  do  litro  da  gasolina  e  o  valor  do  pagamento,  e  exibir  quantos  litros  ele  conseguiu colocar no tanque.*/

var preçoPorLitro = 2.60
var valorPagamento = 260
//  valor que a pessoa pagou para abastecer x litros = z
//  cada litro custa y reais
// quantidade de litros que ela abasteceu foi  z/y


var litrosAbastecidos = (valorPagamento/preçoPorLitro)

if (litrosAbastecidos > 1){
    console.log((valorPagamento/preçoPorLitro)+" litros foram abastecidos")
}
else if(litrosAbastecidos == 1){
    console.log('foi abastecido 1 litro')
}
else{
    console.log('ops')
}
