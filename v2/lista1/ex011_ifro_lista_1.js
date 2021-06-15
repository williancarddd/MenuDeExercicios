//ex_11_ifro_lista_1.js
/*Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um algoritmo  para  converter  este  tempo  em  anos,  meses  e  dias.  Assuma  que  cada  mês  possui sempre 30 dias*/

var temposSemAcidentes = 5000

var anos = Number.parseInt( (temposSemAcidentes/360) )
var messes = Number.parseInt(( (temposSemAcidentes%360) /30) )
var dias = (temposSemAcidentes%360)%30

console.log(` ${anos} anos ${messes} messes ${dias} dias sem acidentes ` )
