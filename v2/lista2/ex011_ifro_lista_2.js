/**Agora altere o algoritmo anterior de maneira que ele permita que o professor, antes deinformar as notas, informe os seus respectivos pesos.Depois disso o algoritmo deve, deanáloga ao exercício anterior, calcular a média, noentanto, agora considerando os seuspesos. Lembrete: A soma dos pesos das notas sempredeve ser 10 */

//pegar o peso 1
//pegar o peso 2
//pegar o peso 3
//pegar o peso 4
//verificar se a soma dos pesos é 10
//se for:
    // pegar a primeira nota
    //pegar a segunda nota
    //pegar a terceira nota
    //pegar a quarta nota
    //calcular a média das 4 notas
    //imprimir a média da nota
    //verificar se a média é maior que 6
    //------se for : aprovado
    //------se não: reprovado
//se não for:
//----há algum erro



var classPrincipal = require("readline-sync")

var peso1 = Number(classPrincipal.question('peso 1: '))
var peso2 = Number(classPrincipal.question('peso 2: '))
var peso3 = Number(classPrincipal.question('peso 3: '))
var peso4 = Number(classPrincipal.question('peso 4: '))

if ((peso1+peso2+peso3+peso4) == 10){
    var n1 = Number(classPrincipal.question('nota 1: '))
    var n2 = Number(classPrincipal.question('nota 2: '))
    var n3 = Number(classPrincipal.question('nota 3: '))
    var n4 = Number(classPrincipal.question('nota 4: '))
    
    var media = ((n1*peso1) + (n2*peso2)+ (n3*peso3) + (n4*peso4))/ 10
    console.log('A média das 4 notas é : '+  media.toFixed(2))

    if (media >=  6){
        console.log('SITUAÇÃO: APROVADO(A)')
    }else{
        console.log("SITUAÇÃO: REPROVADO(A)")
    };

}
else{
    console.log("Houve algum erro com os pesos.")
}
