/** Um banco concederá um crédito especial aos seusclientes, variável com o saldo médiono último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor docrédito de acordo com a tabela abaixo. Mostre umamensagem informando o saldo médio eo valor do crédito.Saldo médioPercentualde 0 a 200 nenhum crédito de 201 a 400 20% do valor do saldo médiode 401 a 600 30% do valor do saldo médio acimade 601 40% do valor do saldo médio */

//ler saldo médio do cliente
//conceder crédito especial conforme as condicionais abaixo
// se o saldo médio for maior que -1
    //----- 0 a 200 nenhum crédito
    //-----201 a 400 20% do valor do saldo médiode
    //-----401 a 600 30% do valor do saldo médio
    //----saldo médio acimade 601 40% do valor do saldo médio
// caso contrário
//---impriri saldo inválido
var receberDados = require('readline-sync')

var saldoMedio = receberDados.question('Digite o seu saldo medio: ')

var creditoEspecialValor = undefined
if(saldoMedio > -1){
    if (saldoMedio >= 0 && saldoMedio <= 200){
        var creditoEspecialValor = 0

    }else if(saldoMedio >= 201 && saldoMedio <= 400){
        creditoEspecialValor = saldoMedio*0.2

    }else if(saldoMedio >= 401  && saldoMedio <= 600){
        creditoEspecialValor = saldoMedio*0.3
    }else{
        creditoEspecialValor = saldoMedio*0.4
    }
    console.log("O seu saldo médio é :"+ saldoMedio + ' reais')
    console.log("O valor do credito especial é: "+ creditoEspecialValor + ' reais')
}else{
    console.log('Saldo médio invalido.')
}
