/**Crie um algoritmo que, dado três números informadospelo usuário, informe qual é omenor deles */

// ler os 3 números e , paralelamente, adicionando os à lista
// criar uma variavel que irá armazenar o maior número
//verificar se o primeiro número é menor que o segundo e se ele é menor que o terceiro
// verificar se o segundo número é menor que o primeiro e se ele é menor que o terceiro
//por dedução lógica, se nenhuma condição for satisfeita, o terceiro é o menor.



var classePrincipal = require('readline-sync')
var armazernarValor = []

for (var index = 1; index <= 3; index++){
    var num = Number(classePrincipal.question(`Digite o ${index} valor: `))
    armazernarValor.push(num)
}

var valorM =NaN
if (armazernarValor[0] < armazernarValor[1] && armazernarValor[0] < armazernarValor[2]){
    valorM = armazernarValor[0]

}else if (armazernarValor[1] < armazernarValor[0] && armazernarValor[1] < armazernarValor[2]){
    valorM = armazernarValor[1]

}else{
    valorM = armazernarValor[2]
}

console.log(`o menor valor entre ${armazernarValor} é ${valorM}`)