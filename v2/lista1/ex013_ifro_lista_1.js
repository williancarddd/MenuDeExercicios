//ex012_ifro_lista_1.js
/*Ler  um  número  inteiro  (assuma  até  três  dígitos)  e  imprimir  a  saída  da  seguinte  forma: CENTENA = x DEZENA = x UNIDADE = x  */

var numInteir = 151

var unidade = (numInteir%10) // pega o ultimo numero
var restuni = (numInteir/10) // pega o que sobrou
var dezena = (restuni% 10) //pega a dezena
var restdezena = (restuni/10) // 1.5
var restx = restdezena % 1
var centena =  (restdezena - restx)

console.log(`centena:${centena} dezena:${Math.floor(dezena)} unidade: ${unidade}`)

