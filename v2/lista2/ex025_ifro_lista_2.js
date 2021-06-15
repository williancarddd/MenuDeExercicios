/**Dados três valores X, Y e Z, verificar se eles podem ser os comprimentos dos lados de um triângulo e, se forem verificar se é um triângulo equilátero, isósceles ou escalenos. Se eles não formarem um triângulo, escrever a mensagem.Considere as seguintes propriedades: •O comprimento de cada lado em um triânguloé menor que a soma dos outros dois lados; •Equiláteros: tem os comprimentosdos três lados iguais; •Isósceles: temos comprimentos de dois lados iguais; •escaleno: temos comprimentos dos três lados  diferentes. */

var  classPrincipal = require("readline-sync")
var lado1_a = Number(classPrincipal.question('Lado 1 do triangulo: '))
var lado2_b = Number(classPrincipal.question('Lado 2 do triangulo: '))
var lado3_c = Number(classPrincipal.question('Lado 3 do triangulo: '))

if ( ((lado1_a+lado2_b) > lado3_c) && ((lado1_a+lado3_c) > lado2_b) && ((lado2_b+lado3_c) > lado3_c)){
    if (lado1_a==lado2_b && lado2_b==lado3_c && lado3_c== lado1_a){
        console.log("O triangulo informado é equilatero.")

    }
    else if (lado1_a == lado2_b || lado1_a == lado3_c || lado3_c == lado2_b){
        console.log('o triangulo informado é isoceles.')
    }
    
    else[
        console.log('O triangulo informado é escaleno.')
    ]

}else {
    console.log("Não é um triangulo.")
}