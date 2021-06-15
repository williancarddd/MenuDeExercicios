/**Você viajou para os Estados Unidos e descobriu que lá a unidade de medida detemperatura é diferente da do Brasil. Para não ter que acessar um serviço na internet a todoo momento, nem fazer os cálculos manualmente, faça um algoritmo que converte atemperatura, dada uma unidade de medida e uma temperatura.Ou seja, se a data forinformada em Celsius o algoritmo deve fornecer a temperaturaem Fahrenheit, já se atemperatura for fornecida em Fahrenheit, o resultadodeve ser em graus Celsius. */
//pegar temperatura
//separar usar o indicativo de graus para separar
//pegar a só a temperatura
//verificar se a temperatura informada é Farenheit
//---se for, calcule-a em celcius
//verificar se a temperatura informada é celcius
//---se for, calcule-a em farenheit
//caso nenhuma seja valida, imprir que há erro na sigla.
var pegarDados = require('readline-sync')

var temperatura = '32°C'//pegarDados.question('Informe a temperatura para conversao: ').toUpperCase().normalize()

var tempModo = temperatura.replace('°')
var temperaturaExtraida = Number(tempModo[0])
console.log(tempModo)

if (tempModo[1] == 'F'){
    tempCelsiu = ((temperaturaExtraida-32)/9)*5
    console.log("A Temperatura em Celcius: " +tempCelsiu)

}else if (tempModo[1] == 'C'){
    tempFarenheit = ((temperaturaExtraida-32)/9)*5
    console.log("A Temperatura em Farenheit: " +tempFarenheit)

}else{
    console.log('Sigla invalida.')
}