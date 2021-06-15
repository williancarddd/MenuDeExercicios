/**
 *  Escrever um programa   que calcula a número de dias decorridos entre duas datas lidas: adata mais antiga e a data mais recente. Considerar a ocorrência de anos bissextos. Consideraro seguinte intervalo para o valor do ano fornecido:1950-1996 (1952 foi um ano bissexto).
 */

var readline = require("readline-sync")
var data1 = readline.question("Primeira data: ")
var data2 = readline.question("Segunda data: ")

var diasTotais = (data2-data1)*365 // desconsiderando bissexto

for (var x = data1 ; x <= data2; x++ ){
    
    //se um ano for bissexto , acrescento +1 aos dias totais
    if (x % 4 == 0 && x % 100 !== 0 || x % 400 == 0){
        diasTotais += 1
        console.log(x)
        
    } else {
        console.log(`${x} não bissexto, nenhum dia foi acrescentado.`)
    }

}

console.log('Ano decorridos: '+ diasTotais)