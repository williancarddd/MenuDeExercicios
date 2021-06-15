/*Agora altere esse algoritmo para que imprima osnúmeros em ordem decrescente.
 */
//inverter a ordem de cada sequência
var classePrincipal = require('readline-sync')

var n1 = Number(classePrincipal.question("Digite um numero: "))
var n2 = Number(classePrincipal.question("Digite um outro numero: "))
var n3 = Number(classePrincipal.question("Digite mais um numero: "))

if (n1 <= n2 && n1 <= n3){
    if (n2 <= n3){
        console.log(n3,n2,n1)
    }else{
        console.log(n2,n3,n1)
    }
}else if(n2 <= n1 && n2 <= n3){
    if (n1<= n3){
        console.log(n3,n1, n2)
    }else{
        console.log(n1, n3,n2)
    }
}else{
    if(n2 <= n1){
        console.log(n1,n2,n3)

    }else{
        console.log(n2,n1,n3)
    }
}
