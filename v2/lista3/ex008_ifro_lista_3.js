// material radiovativo / 2 >>> 50 segundos
// receber massa inicial
// até essa massa ser 0.5 , em gramas.
// mostar massa inicial , final e tempo em horas, minutos e segundos

var readLine = require('readline-sync')

var masssaI = readLine.question('Massa(gramas) inicial do material radioativo: ')
var taxaUsada = 0.5
var temppS = 0
var massaF = masssaI

while (true){
    if(massaF <= 0.5){
        break
    } else{
        massaF /= 2
        temppS += 50
    }
        

}

tempHoras = (temppS/3600).toFixed(0)
horasRes = (temppS  % 3600).toFixed(0)
tempMin = (horasRes / 60).toFixed(0)
tempSSS = horasRes  % 60

console.log(`
A massa inicial do material foi: ${masssaI}\n
A massa final desse material é de: ${massaF}\n
O tem total para decomposição foi: ${tempHoras}:${tempMin}:${tempSSS}
Tempo segundos total: ${temppS}
`)