//Crie um algoritmo que, dado três números informadospelo usuário, verifique se algum deles é múltiplo de outro. Note que pode haver mais  de um múltiplo entre eles.

var classePrincipal = require("readline-sync")
var n1 = Number(classePrincipal.question("Digite um numero: "))
var n2 = Number(classePrincipal.question("Digite outro numero: "))
var n3 = Number(classePrincipal.question("Digite mais um numero: "))

if (n1 % n2 == 0  && n1 % n3 == 0){
    console.log(`${n1} é multiplo de ${n2} e ${n3}`)
}
else if (n1 % n2 == 0){
    console.log(`${n1} é multiplo de ${ n2}`)
}
else if (n1 % n3 == 0){
    console.log(`${n1} é multiplo de ${n3}`)
}

else if (n2 % n1 == 0  && n2 % n3 == 0){
    console.log(`${n2} é multiplo de ${n1} e ${n3}`)
}
else if (n2 % n1 == 0){
    console.log(`${n2} é multiplo de ${ n1}`)
}
else if (n2 % n3 == 0){
    console.log(`${n2} é multiplo de ${n3}`)
}

else if(n3 % n1 == 0  && n3 % n2 == 0){
    console.log(`${n3} é multiplo de ${n1} e ${n2}`)
}
else if (n3 % n1 == 0){
    console.log(`${n3} é multiplo de ${ n1}`)
}
else if (n3 % n2 == 0){
    console.log(`${n3} é multiplo de ${n2}`)
}
else{
    console.log('Nenhum numero é multiplo.')
}