/**Uma empresa concederá um aumento de salário aosseus funcionários, variável deacordo com o cargo, conforme a tabela abaixo. Façaum algoritmo que leia o salário e ocargo de um funcionário e calcule o novo salário.Se o cargo do funcionário não estiver natabela, ele deverá, então, receber 40% de aumento.Mostre o salário antigo, o novo salárioe a diferença.CódigoCargoPercentual101Gerente10%102Engenheiro20%103Técnico30%
 */

//ler cargo
//ler salário
//criar uma função para validar o cargo
//aumentar o salário conforme o cargo do trabalhador
//--se o cargo não estiver na base de dados: o salário será aumentado em 40%
//--se o cargo tiver na base de dados: o aumento será baseado na tabela
//------------Gerente: 10%
//------------Engenheiro: 20%
//------------Tecnico: 30%

var receberDados = require('readline-sync')

var cargoFunci = receberDados.question('Digite o cargo do funcionario: ')
var salarioFunci = receberDados.question('Agora digite o salario do funcionario: ')

var validarCargo = function(cargo){
    var objetoCargos = {Gerente:1.1, Engenheiro: 1.2, Tecnico: 1.3}

    if (cargo in objetoCargos){
        return [objetoCargos[cargo], true] // retorna a taxa de aumento

    }else{
        return false
    }
}

var cargoValidado = validarCargo(cargoFunci)
if (cargoValidado[1]){
    

    var salarioComCargo = Math.floor(cargoValidado[0]*salarioFunci)
    var diferençaSalario = ( salarioComCargo-salarioFunci) 
    console.log(`O novo salario para o cargo de ${cargoFunci} é ${salarioComCargo}`)
    console.log(`A diferenca entre o antigo salario e o novo é ${diferençaSalario}`)

}else{
    var salarioSemCargo = salarioFunci*1.4
    var diferençaSalario = salarioSemCargo - salarioFunci
    console.log('seu salario antigo : '+ salarioFunci)
    console.log('seu novo salario: '+salarioSemCargo)
    console.log('a diferença do salario antigo com o novo: '+ diferençaSalario)
}