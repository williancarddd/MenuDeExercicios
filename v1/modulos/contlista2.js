function imprirEscolha(){
    for(var x= 1; x<= 25; x++){
        console.log(`#EXERCICIO-${x}`)
    }
    console.log('#0 para retornar')
}
function bannerExercicio(ex){
    console.log('\n\nExecutando exercico '+ex+'\n')
}


function ex1(){
    var primeiro = 20;  console.log ('o numero 1 é '+primeiro)
    var segundo = 8; console.log ('o numero 2 é '+segundo)
    var resultado = primeiro+segundo
    console.log ('a soma de '+primeiro+' + '+segundo+' + é = '+resultado)
}

function ex2(){
    var classePrincipal = require('readline-sync')
    var armazernarValor = []

for (var index = 1; index <= 3; index++){
    var num = Number(classePrincipal.question(`Digite o ${index} valor: `))
    armazernarValor.push(num)
}

    var valorM = NaN
if (armazernarValor[0] > armazernarValor[1] && armazernarValor[0] > armazernarValor[2]){
    valorM = armazernarValor[0]

}else if (armazernarValor[1] > armazernarValor[0] && armazernarValor[1] > armazernarValor[2]){
    valorM = armazernarValor[1]

}else{
    valorM = armazernarValor[2]
}

    console.log(`o maior valor entre ${armazernarValor} é ${valorM}`)
}

function ex3(){
    var classePrincipal = require('readline-sync')
    var armazernarValor = []

for (var index = 1; index <= 3; index++){
    var num = Number(classePrincipal.question(`Digite o ${index} valor: `))
    armazernarValor.push(num)
}

    var valorM =NaN
if (armazernarValor[0] < armazernarValor[1] && armazernarValor[0] < armazernarValor[2]){
    valorM = armazernarValor[0]

}else if (armazernarValor[1] < armazernarValor[0] && armazernarValor[1] < armazernarValor[2]){
    valorM = armazernarValor[1]

}else{
    valorM = armazernarValor[2]
}

console.log(`o menor valor entre ${armazernarValor} é ${valorM}`)
}

function ex4(){
    var classePrincipal = require('readline-sync')
    var valorAlerta = Number(classePrincipal.question("Nivel de risco: "))

//CORES
    var verde =' \033[32m'
    var vermelho = '\033[31m'
    var restaura = '\033[0;0m'

    if (valorAlerta < 1 || valorAlerta > 10){ // se o valor de alerta for menor que 1 e maior que 10 >> ele não faz parte de um nivel de risco
        console.log(`O numero ${valorAlerta} nao corresponde a um nivel de risco.`)

    }
    else if (valorAlerta >=9 ){
        console.log(vermelho+' O RISCO É CONSIDERADO GRAVE. '+restaura)
    }
    else{

        console.log(verde+' O RISCO ESTÁ EM UMA MARGEM DE SEGURANCA'+restaura)// não consegui usar 'ç'
    }
}

function ex6(){
    var classePrincipal = require('readline-sync')
    var valorAlerta = Number(classePrincipal.question("Nivel de risco: "))
    var verde = '\033[32m'
    var vermelho = '\033[31m'
    var restaura = '\033[0;0m'
    var amarelo = '\033[33m'
    var azul = '\033[34m'

if (valorAlerta < 0 || valorAlerta > 10){
    console.log(`O numero ${valorAlerta} nao corresponde a um nivel de risco.`)

}else if(valorAlerta >= 0 && valorAlerta <= 3){
    console.log(verde+'O RISCO É CONSIDERADO BAIXO'+restaura)

}else if(valorAlerta > 3 && valorAlerta <= 6){
    console.log(amarelo+ "O RISCO É CONSIDERADO MÉDIO"+restaura)

}else if (valorAlerta> 6 && valorAlerta<=9){
    console.log(azul+"O RISCO É CONSIDERADO ALTO"+restaura)
    
}else{
    console.log(vermelho+' O RISCO É CONSIDERADO GRAVE. '+restaura)
}
}

function ex7(){
    var classePrincipal = require("readline-sync")
    var n1 = Number(classePrincipal.question("Digite um numero: "))
    var n2 = Number(classePrincipal.question("Digite outro numero: "))
    var n3 = Number(classePrincipal.question("Digite mais um numero: "))

    if (n1 % n2 == 0  && n1 % n3 == 0){
        console.log(`${n1} é multiplo de ${n2} e ${n3}`)
    }
    else if (n1 % n2 == 0){
        console.log(`${n1} é multiplo de ${ n2}`)
    }
    else if (n1 % n3 == 0){
        console.log(`${n1} é multiplo de ${n3}`)
    }

    else if (n2 % n1 == 0  && n2 % n3 == 0){
        console.log(`${n2} é multiplo de ${n1} e ${n3}`)
    }
    else if (n2 % n1 == 0){
        console.log(`${n2} é multiplo de ${ n1}`)
    }
    else if (n2 % n3 == 0){
        console.log(`${n2} é multiplo de ${n3}`)
    }

    else if(n3 % n1 == 0  && n3 % n2 == 0){
        console.log(`${n3} é multiplo de ${n1} e ${n2}`)
    }
    else if (n3 % n1 == 0){
        console.log(`${n3} é multiplo de ${ n1}`)
    }
    else if (n3 % n2 == 0){
        console.log(`${n3} é multiplo de ${n2}`)
    }
    else{
        console.log('Nenhum numero é multiplo.')
    }
}

function ex8(){
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
}

function ex9(){
    var  classPrincipal = require("readline-sync")
    var altura = Number(classPrincipal.question('altura do triangulo: '))
    var base = Number(classPrincipal.question('base do triangulo: '))



console.log('A area de triangulo é: '+((base*altura)/2) )

}

function ex10(){
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
}

function ex11(){
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

}

function ex12(){
    console.log('Vou tentar adivinhar um animal que você esteja pensando.')
    console.log('Responda SIM ou NÃO para as perguntas.')
    var classPrincipal = require('readline-sync')

var validar = function(valor){
    var listaDados = ['sim', 's', 'não', 'nao', 'n'] // 0,1,2,3,4
    if (listaDados.indexOf(valor) == 0 || listaDados.indexOf(valor) == 1){
        return true

    }else{
        return false
    }
}

// 2 perguntas para cada animal
var pergQuatroPatas = classPrincipal.question('Tem quatro patas ?')
if (validar(pergQuatroPatas)){ // onça pintada, leão, gato

        var pergJuba = classPrincipal.question('Tem juba ao redor do pescoço ?')
        if (validar(pergJuba)){ //true
            console.log('É um leão.')

        }else{
            var pergDomestico = classPrincipal.question('Conseguimos criar facilmente e dar ração ?')
            if (validar(pergDomestico)){
                console.log('É um gato.')

            }else{
                var pergManchaCorpo = classPrincipal.question('Tem manchas pretas pelo corpo ?')
                if (validar(pergManchaCorpo)){
                    console.log('É uma onça pintada.')
                    
                }else{
                    console.log('não sei o que é.')
                }
            }
        }
    
}else{
    var pergMarinho = classPrincipal.question("É um animal marinho ?") //
    if (validar(pergMarinho)){
        var pergAveMarinha = classPrincipal.question('É uma ave marinha ?')
        if (validar(pergAveMarinha)){
            console.log('É um pinguim.')
        }
        else{
            pergCaça = classPrincipal.question("Foi cacada por muito tempo ?")
            if (validar(pergCaça)){
                console.log('É uma baleia.')
            
            }else{
                var pergBarbatana = classPrincipal.question("Possui uma das maiores barbatana do mundo ?")
                if (validar(pergBarbatana)){
                    console.log('É um tubarão.')
                }else{
                    var pergChoque = classPrincipal.question('Ele dá choque ?')
                    if(validar(pergChoque)){
                        console.log('É uma enguia')

                    }else{
                        console.log("não sei o que é.")
                    }
                }
            }
        }
    }else{
        var pergAveComum = classPrincipal.question('É uma ave comum ?')
        if (validar(pergAveComum)){
            var pergBicePataAmarelos = classPrincipal.question("Tem bico e patas amarelos ?")
            if (validar(pergBicePataAmarelos)){
                console.log('É um pato.')
    
            }else{
                var pergVisao = classPrincipal.question("Posssui uma visão apurada ?")
                if(validar(pergVisao)){
                    console.log('É uma aguia.')
                }else{
                    var pergDomesticada = classPrincipal.question("É um dos animais mais domesticados do mundo ?")
                    if (validar(pergDomesticada)){
                        console.log('É uma galinha')
                    }else{
                        console.log('Não sei o que é.')
                    }
                }
            }
        }
        }
    }
}

function ex13(){
    var classePrincipal = require('readline-sync')

    var n1 = Number(classePrincipal.question("Digite um numero: "))
    var n2 = Number(classePrincipal.question("Digite um outro numero: "))
    var n3 = Number(classePrincipal.question("Digite mais um numero: "))

if (n1 <= n2 && n1 <= n3){
    if (n2 <= n3){
        console.log(n1,n2,n3)
    }else{
        console.log(n1,n3,n2)
    }
}else if(n2 <= n1 && n2 <= n3){
    if (n1<= n3){
        console.log(n2,n1, n3)
    }else{
        console.log(n2, n3,n1)
    }
}else{
    if(n2 <= n1){
        console.log(n3,n2,n1)

    }else{
        console.log(n3,n1,n2)
    }
}
}

function ex14(){
    var classePrincipal = require('readline-sync')

    var n1 = Number(classePrincipal.question("Digite um numero: "))
    var n2 = Number(classePrincipal.question("Digite um outro numero: "))
    var n3 = Number(classePrincipal.question("Digite mais um numero: "))

if (n1 <= n2 && n1 <= n3){
    if (n2 <= n3){
        console.log(n3,n2,n1)
    }else{
        console.log(n2,n3,n1)
    }
}else if(n2 <= n1 && n2 <= n3){
    if (n1<= n3){
        console.log(n3,n1, n2)
    }else{
        console.log(n1, n3,n2)
    }
}else{
    if(n2 <= n1){
        console.log(n1,n2,n3)

    }else{
        console.log(n2,n1,n3)
    }
}
}

function ex15(){
    var validarMatricula = function(matricula){
        if(String(matricula).length == 5){ // tamanho da matricula tem que ser 5 digitos
            return true
    
        }else{
            return false
        }
    }
    
    var validarGenero = function(generoRecebendo){  // validar o genero > recebe em sigla e devolve em nome
    
        generosLista = ['M','F']
        generoObjeto = {Genero:null, temGenero:Boolean}
        if (generosLista.indexOf(generoRecebendo > -1)){// se o genero estiver dentro da lista
            generoObjeto.temGenero = true
    
            if(generosLista.indexOf(generoRecebendo) == 0){
                generoObjeto.Genero = 'Masculino'
            
            }else if(generosLista.indexOf(generoRecebendo)== 1){
                generoObjeto.Genero ='Feminino'    
            }
    
        }else{
            generoObjeto.temGenero = false
        }
    
        return generoObjeto
    }
    
    var validarCurso = function(siglaCurso){ // validar o curso
        cursosLista = ['BSI','EE', 'EM', 'EC',  'AQ']
        objetoCursos = {CursoNome:null, temCurso:null}
    
        if (cursosLista.indexOf(siglaCurso) > -1 ){ //se a sigla estiver dentro da lista 
            objetoCursos.temCurso = true
        
                if(cursosLista.indexOf(siglaCurso) == 0){ 
                    objetoCursos.CursoNome = 'Bacharelado em Sistemas de Informação'
                }
                
                else if(cursosLista.indexOf(siglaCurso) == 1){
                    objetoCursos.CursoNome = 'Engenharia Elétrica'
                }
                
                else if(cursosLista.indexOf(siglaCurso) == 2){
                    objetoCursos.CursoNome = 'Engenharia Mecânica'
                }
                
                else if(cursosLista.indexOf(siglaCurso) == 3){
                    objetoCursos.CursoNome = 'Engenharia Civil'
                }
    
                
                else if(cursosLista.indexOf(siglaCurso) == 4){
                    objetoCursos.CursoNome = 'Arquitetura'
                }
    
            }else{
                objetoCursos.temCurso = false
            }
        return objetoCursos
        }
    
    
    var validarCoeficiente = function(coeficente){
        objetoCoeficiente = {Indice:null, coeficencia: coeficente}
        if (coeficente >= 0 && coeficente <= 10){
                if(coeficente >= 0 && coeficente <= 3){
                    objetoCoeficiente.Indice = 'Preocupante'
                }
                else if(coeficente > 3 && coeficente <= 5){
                    objetoCoeficiente.Indice ='Necessita de melhoras'
                }
                else if(coeficente > 5 && coeficente <= 7){
                    objetoCoeficiente.Indice ='Regular'
                }
                else if(coeficente > 7 && coeficente <= 9){
                    objetoCoeficiente.Indice = 'Bom'
            
                }else{
                    objetoCoeficiente.Indice = 'Excelente'
                }
    
        }
        else{
            objetoCoeficiente.Indice = 'coeficiente invalido'
        }
        return objetoCoeficiente   
    }
    
    
    
    var receberDados = require('readline-sync')
    
    var receberNumeroMatricula = receberDados.question('Digite o numero da matricula: ').trim()
    var receberNomeCompleto = receberDados.question('Digite o nome completo: ').toUpperCase()
    var receberGeneroSigla = receberDados.question('Digite o genero(M ou F): ').toUpperCase()
    var receberCurso = receberDados.question('Digite a sigla do curso: ').toUpperCase()
    var receberCoeficienteRendimento = Number(receberDados.question('Digite o coeficiente de rendimento: '))
    
    
    var matriculaValidada = validarMatricula(receberNumeroMatricula)
    var cursoValidado = validarCurso(receberCurso)
    var generoValidado = validarGenero(receberGeneroSigla)
    var coeficienteValidado = validarCoeficiente(receberCoeficienteRendimento)
    
    
    if (matriculaValidada && cursoValidado.temCurso && generoValidado.temGenero ){// se o genero, matricula  e curso forem validos
        console.log(`
        
        MATRICULA: ${receberNumeroMatricula}
        NOME:  ${receberNomeCompleto}
        GENERO: ${generoValidado.Genero}
        CURSO: ${cursoValidado.CursoNome}
        COEFICIENTE DE RENDIMENTO: ${coeficienteValidado.coeficencia}
        INDICE DE RENDIMENTO: ${coeficienteValidado.Indice}
        
        `)
    }
}

function ex16(){
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
}

function ex19(){
    var pegarDados = require('readline-sync')

    var valorTotal = pegarDados.question('Digite o valor total: ')
    var prestações = pegarDados.question('Digite a quantidade de prestacoes: ')

    var valorCadapresta =  (valorTotal/prestações).toFixed(0)

    if (prestações < 12){ // se o numero de prestações for menor que 12
        console.log('A quantidade minima de prestações é 12.')
    }else{

        

        if (prestações >= 12 && prestações < 24){
            console.log('Nao houve alteracao no valor.')
            
        }else if(prestações >= 24 && prestações < 36){
            valorTotal *= 1.10
        }
        else{
            valorTotal *= 1.15
        }
        var valorCadapresta =  (valorTotal/prestações).toFixed(0)
        console.log('o valor de cada prestação :' + valorCadapresta)
        console.log('O valor total: '+ valorTotal)

}
}

function ex20(){
    var recebeDados = require('readline-sync')

    var valor = Number(recebeDados.question('Digite o valor a ser contabilizado: '))

    var notas100 = Math.floor(valor/100)
    var notas50 = Math.floor((valor%100)/50)
    var notas10 = Math.floor((valor%50)/10)
    var notas5 = Math.floor((valor%10)/5)
    var notas1 = Math.floor((valor%5)/1)

console.log(`100: ${notas100}
50: ${notas50}
10: ${notas10}
5: ${notas5}
1: ${notas1}`)
}

function ex21(){
    var receberDados = require('readline-sync')

    var anoCarro = Number(receberDados.question("Digite o ano do carro: "))
    var valorCarro = Number(receberDados.question("Digite o valor do carro: "))

    var valorTaxa = 0
if (anoCarro < 1990){
    valorTaxa = valorCarro*0.01

}else{
    valorTaxa = valorCarro*0.15
}

console.log(`O imposto sobre o valor de ${valorCarro.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})} é ${valorTaxa.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}`)
}

function ex22(){
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
}


function ex23(){
    var receberDados = require('readline-sync')

    var saldoMedio = receberDados.question('Digite o seu saldo medio: ')

    var creditoEspecialValor = undefined
if(saldoMedio > -1){
    if (saldoMedio >= 0 && saldoMedio <= 200){
        var creditoEspecialValor = 0

    }else if(saldoMedio >= 201 && saldoMedio <= 400){
        creditoEspecialValor = saldoMedio*0.2

    }else if(saldoMedio >= 401  && saldoMedio <= 600){
        creditoEspecialValor = saldoMedio*0.3
    }else{
        creditoEspecialValor = saldoMedio*0.4
    }
    console.log("O seu saldo médio é :"+ saldoMedio + ' reais')
    console.log("O valor do credito especial é: "+ creditoEspecialValor + ' reais')
}else{
    console.log('Saldo médio invalido.')
}

}

function ex24(){
    var pegarDados = require('readline-sync')
    var codigoPedido = Number.parseInt(pegarDados.question("Digite o Codigo do pedido: "))
    var quantidaPedido = Number.parseInt(pegarDados.question('Digite a quatida de pedidos: '))

    var validarPedido = function(codigo){
    if( codigo == 101){
        console.log('Bauru simples')
        return 1.30
    }
    else if( codigo == 102){
        console.log('Bauru c/ovo')
        return 1.50
    }
    else if( codigo == 103){
        console.log('Hamburger')
        return 1.1
    }
    else if( codigo == 104){
        console.log('Cheeseburger')
        return 1.30
    }
    else if( codigo == 105){
        console.log('Refrigerante')
        return 1.0
    }
    else{
        console.log("Codigo nao encontrado.")
    }
}

    var pedidoFeito = validarPedido(codigoPedido) // mostrar e retornar o valor do item
    console.log('O valor do lanche: '+ (quantidaPedido*pedidoFeito).toLocaleString('pt-br', {style:'currency', currency:'BRL'}))

}

function ex25(){
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
    
    else{
        console.log('O triangulo informado é escaleno.')
    }

}else {
    console.log("Não é um triangulo.")
}
}

function funcionarContlista2(ex){
    bannerExercicio(ex)
    switch (ex){
        case 1:
            ex1()
            break
        case 2:
            ex2()
            break
        case 3:
            ex3()
            break
        case 4:
            ex4()
            break
        case 5:
            ex5()
            break
        case 6:
            ex6()
            break
        case 7:
            ex7()
            break
        case 8:
            ex8()
            break
        case 9:
            ex9()
            break
        case 10:
            ex10()
            break
        case 11:
            ex11()
            break
        case 12:
            ex12()
            break
        case 13:
            ex13()
            break
        case 14:
            ex14()
            break
        case 15:
            ex15()
            break
        case 16:
            ex16()
            break
        case 17:
            ex17()
            break
        case 18:
            ex18()
            break
        case 19:
            ex19()
            break
        case 20:
            ex20()
            break
        case 21:
            ex21()
            break
        case 22:
            ex22()
            break
        case 23:
            ex23()
            break
        case 24:
            ex24()
            break
        case 25:
            ex25()
            break
    }
}

module.exports = {funcionarContlista2, imprirEscolha}