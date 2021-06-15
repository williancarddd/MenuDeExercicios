/**Crie um algoritmo que, dados o tamanho de trêslados informados pelo usuário, verifiquese: (1) é um triângulo isósceles, (2) é equilátero,(3) é escaleno ou (4) não é um triângulo. */

//pegar 1 lado
//pegar 2 lado
//pegar 3 lado
//verificar se é triângulo > a soma de dois lados de um triângulo deve ser maior que o lado não participante da soma. > isso vale para cada lado.
// -- se for um triângulo 
//----- verifica se é equilátero > todos o lado são iguai
//----- verifica se é isoceles > 2 lado igual
//----- verifica se é escaleno > 3 lado diferentes > por dedução análitica , ele é válido quando nenhuma opção anterior for selecionada
//-- se não for

//--- imprimir "não é triângulo"

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