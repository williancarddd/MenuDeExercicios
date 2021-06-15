/*Escreva  um  algoritmo  para  ler  o  nome  e  a  idade  de  uma  pessoa,  e  exibir  quantos  dias  de vida  ela  possui.  Considere  sempre  anos  completos,  e  que  um  ano  possui  365  dias.  Ex:  uma pessoa com 19 anos possui 6935 dias de  vida; veja  um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS  */

//usar como HTML
var ano = Number.parseInt(window.prompt("digite sua idade"))
var mess = Number.parseInt(window.prompt('digite quantos messes faltam para seu aniversário: '))
var dias = Number.parseInt(window.prompt('digite quantos dias faltam para completar mais 1 mes de seu nascimento:  '))
var resultado = (ano*365) +((12-mess)*30) + dias
console.log(`dias ${resultado} `)