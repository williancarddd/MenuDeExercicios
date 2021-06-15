/** Faça um algoritmo que, dados três números inteiros,os imprima em ordem crescente. */
//pegar o primeiro numero
//pegar o segundo numero
//pegar o terceiro numero
//CADA CONDICIONAL VAI TER UMA ORDEM ESPECIFICA DOS NÚMEROS
//PRIMEIRA CONDICIONAL ---------------- A QUANTIDADE DE CONDICIONAIS ESTÁ BASEADA EM UM COMPLEXIDADE DE ANAGRAMAS > 3!
//---- VERIFICAR SE O PRIMEIRO NÚMERO É O MENOR DE TODOS
//SEGUNDA CONDICIONAL
//---- VERIFICAR SE O SEGUNDO  NÚMERO É O MENOR DE TODOS
//TERCEIRA CONDICIONAL
//---- VERIFICAR SE O TERCEIRO NÚMERO É O MENOR DE TODOS


var classePrincipal = require('readline-sync')

var n1 = Number(classePrincipal.question("Digite um numero: "))
var n2 = Number(classePrincipal.question("Digite um outro numero: "))
var n3 = Number(classePrincipal.question("Digite mais um numero: "))

if (n1 <= n2 && n1 <= n3){
    if (n2 <= n3){
        console.log(n1,n2,n3)
    }else{
        console.log(n1,n3,n2)
    }
}else if(n2 <= n1 && n2 <= n3){
    if (n1<= n3){
        console.log(n2,n1, n3)
    }else{
        console.log(n2, n3,n1)
    }
}else{
    if(n2 <= n1){
        console.log(n3,n2,n1)

    }else{
        console.log(n3,n1,n2)
    }
}

