/**Considerando o sistema de notas da UTFPR, construaum algoritmo que, dadas 4 notasparciais de um aluno pelo usuário, calcule a médiae imprima se o aluno foi aprovado,reprovado ou reprovado, mas com quebra de pré-requisito */
// pegar a primeira nota
//pegar a segunda nota
//pegar a terceira nota
//pegar a quarta nota
//calcular a média das 4 notas
//imprimir a média da nota
//verificar se a média é maior que 6
//------se for : aprovado
//------se não: reprovado

var classPrincipal = require("readline-sync")

var n1 = Number(classPrincipal.question('nota 1: '))
var n2 = Number(classPrincipal.question('nota 2: '))
var n3 = Number(classPrincipal.question('nota 3: '))
var n4 = Number(classPrincipal.question('nota 4: '))

var media = (n1+n2+n3+n4)/4

console.log('A média das 4 notas é : '+  media.toFixed(2))
if (media >=  6){
    console.log('SITUAÇÃO: APROVADO(A)')
}else{
    console.log("SITUAÇÃO: REPROVADO(A)")
}