/**Faça um algoritmo que, dado o valor total em reais e o número de prestaçõe desejadas, calcule o valor de cada prestação. O número mínimo de prestações deve ser 12.Se o número de prestações for maior ou igual a 24,adicione 10% de juros ao valor total, sefor maior ou igual a 36, adicione 15% de juros aovalor total */
//pegar o valor
//pegar a quantidade de prestaçoes
//verificar se a quantidade de prestações é maior ou igual a  12
//se for, verificar se elas estão entre 12 e 24 > não muda valor
// se for, verificar se elas estão entre 24 e 35 > muda + 10%
//se for, verificar se elas estão entre 36 e --> muda  + 15 %
//imprir a quantidade de cada parcela
//imprimir o valor total com ou sem alteração
var pegarDados = require('readline-sync')

var valorTotal = pegarDados.question('Digite o valor total: ')
var prestações = pegarDados.question('Digite a quantidade de prestacoes: ')

var valorCadapresta =  (valorTotal/prestações).toFixed(0)

if (prestações < 12){ // se o numero de prestações for menor que 12
    console.log('A quantidade minima de prestações é 12.')
}else{

    

    if (prestações >= 12 && prestações < 24){
        console.log('Nao houve alteracao no valor.')
        
    }else if(prestações >= 24 && prestações < 36){
        valorTotal *= 1.10
    }
    else{
        valorTotal *= 1.15
    }
    var valorCadapresta =  (valorTotal/prestações).toFixed(0)
    console.log('o valor de cada prestação :' + valorCadapresta)
    console.log('O valor total: '+ valorTotal)

}