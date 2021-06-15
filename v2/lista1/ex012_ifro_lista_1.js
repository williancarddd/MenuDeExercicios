//ex012_ifro_lista_1.js
/* Faça  um  algoritmo  para  ler  o  salário  de  um  funcionário  e  aumentá-Io  em  15%.  Após  o aumento,  desconte 8%  de  impostos.  Imprima  o  salário  inicial,  o  salário  com  o  aumento  e  o salário final */

var salario = 1250
var  aumentoSalario = salario*1.15
var  desconoImposto = aumentoSalario*0.92


var mBRL = function(x){
    return x.toLocaleString('pt-br', {style:"currency", currency:'BRL'})
}
console.log("seu salário era: "+mBRL(salario)+" após o aumento ficou: "+mBRL(aumentoSalario)+" e com desconto agora é: "+mBRL(desconoImposto))