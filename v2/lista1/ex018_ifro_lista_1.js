/*A  empresa  Hipotheticus  paga  R$10,00  por  hora  normal  trabalhada,  e  R$15,00  por  hora extra.  Faça  um  algoritmo  para  calcular  e  imprimir  o  salário  bruto  e  o  salário  líquido  de  um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos */

var hTrabalhada = 176;
var hExtra = 20;
var sBruto = (hTrabalhada*10) + (hExtra*15);
var sLiquido = sBruto*0.9;

var cValor = function (salarioN){
    return Number(salarioN).toLocaleString('pt-br', {style:'currency', currency: 'BRL'});

};
console.log(`salário bruto é ${cValor(sBruto)} e o liquido é ${cValor(sLiquido)}`);