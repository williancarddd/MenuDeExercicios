function imprirEscolha(){
    for(var x= 1; x<= 26; x++){
        console.log(`#EXERCICIO-${x}`)
    }
    console.log('#0 para retornar')
}
function bannerExercicio(ex){
    console.log('\n\nExecutando exercico '+ex+'\n')
}



function ex1(){
    


var receber = require("readline-sync")


//variaveis para comparação
var maior = 0 
var menor = 0

for(var index = 1; index <= 15; index++){
    
    var valorUsuario = Number(receber.question(`${index} Digite um numero: ` ))

    if ( index == 1 ){ // se for o primeiro numero digitado pelo  o usuario , as variaveis maior e menor recebem o primeiro valor digitado pelo usuario.
        maior =  valorUsuario
        menor = valorUsuario

    } else { // caso não seja o primeiro numero digitado pelo usuario
        if (valorUsuario > maior){// verifico se o valor digitado é maior que o valor anterior
            maior = valorUsuario

        }
        if (valorUsuario < menor) {
            menor = valorUsuario
        }


    }
    
}


console.log(menor)
console.log(maior)
}


function ex2(){
        var numTabuada =  9

    for (let x = 0;x<= 10; x++ ){
        console.log(`${numTabuada} x ${x} = ${numTabuada*x}`)
    }
}

function ex3(){
    

    var valor = 0.06
    function formatar(numero=0){
        return numero.toLocaleString('pt-br', {style:'currency', currency:"BRL"})
    }

    for (var x = 1 ; x <= 200; x ++){
        console.log(`O valor ${formatar(valor) } foi multiplicado por ${x} e ficou: ${formatar(valor*x)}`)
    }
}

function ex4(){
    
    var soma = 0

    for (var x = 1; x <= 99; x++){
        if (x == 1){
            soma += x/x
        }
        else{
            soma += ( x+2 / (x/2).toFixed(0) )
        
        }
        console.log(`calculando ${x}/ ${(x/2).toFixed(0)}`)
        
    }

    console.log(soma)
}

function ex5(){
        
    var receberDados = require('readline-sync')
    var prod = 1
    while (true) {
        var num = Number(receberDados.question("Digite um numero(aperte 0 para parar o progama) : "))
        if (num==0){
            break
        } else {
            prod *= num
        }
        

    }

    console.log('O produto dos números digitados é : '+prod)
}

function ex6(){
    var readLine = require('readline-sync')

var num = readLine.question("Digite um numero: ")
    // n é perfeito se ele for igual a soma de seus divisores positivos diferente dele


    var acumulador = 0
    for( let x = 1 ; x < num;  x++){
        if (num % x == 0){
            console.log(`${x} é divisor de ${num}.` )
            acumulador += x
        }
    }

    if (acumulador == num){
        console.log(`${num} é perfeito`)
    } else {
        console.log(` ${num}  não atingiu a perfeição.`)
    }
}

function ex7(){
        
    var contador = 0
    for(let x = 1000; x < 2000; x++){
        if (x % 11 == 5){
            console.log(`O número ${x} resta 5 quando dividido por 11.` )
            contador +=1
        }
    }

    console.log(contador)
}

function ex8(){
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
}

function ex9(){
        //  gerar os n primeiros numeros sequencia fibonacci
    //  1 1 2 3 5 6
    //  x y  z
    // x = y
    // y = z

    var readline = require("readline-sync")
    var n = readline.question("Digite um numero: ")
    var x  = y = 1
    var z = 0
    for (var j =  1; j <= n; j++){
        x = y
        y = z

        var z = x + y
        console.log(`o ${j} termo é : `+ z)
    }
}

function ex10(){
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
}

function ex11(){
    var readline = require('readline-sync')
    par = 0
    impar = 0
    while (true){
        var n = Number(readline.question("Digite um numero: "))
        if (n > 1000){
            break
        } else {
            if (n % 2 == 0){
                par += n
            } else  {
                impar += n
            }
        }
    }
    
    console.log('A soma dos números pares é: '+ par)
    console.log('A soma dos números impares é: '+ impar) 
}

function ex12(){
    

    var readline = require('readline-sync')
    var flag = false
    while(true){
        var soma = 0
        var produto = 1
        if (flag){
            break
        } else {

            subflag = 0
            for (var x = 1; x <= 3; x++){
                var n = Number.parseInt(readline.question("Digite um numero: "))
                if (x == 1){
                    subflag = n
                } else {
                    if  (subflag > n){
                        produto = 0
                        flag = true
                        break
                    } else {
                        soma  += n
                        produto *= n

                    }
                }
            }
            console.log('A média é : '+ soma/3 )
            console.log('A soma é: '+ soma)
            console.log('o produto é: '+ produto)
        }
    }
}

function ex13(){
    
    var readline = require('readline-sync')
    var mairoM = 0
    var menorM = 0
    var somaN = 0
    var auxi = 0
    console.log('valor negativo para.')
    while (true){
        var n = Number.parseInt(readline.question("Digite a media: "))
            if (n < 0){
                break
            } else {
                auxi++
                somaN += n
                if (auxi == 1){
                    mairoM = menorM = n
                } else {
                    if (mairoM < n){
                        mairoM = n
                    }

                    if (menorM > n ){
                        menorM = n
                    }
                }
            }
            
    }

    var media = somaN / auxi

    console.log('maior média é: '+ mairoM)
    console.log('menor média é: '+ menorM)
    console.log('A média geral é: '+ media)
}

function ex14(){
    var readline = require('readline-sync')

    var n = Number.parseInt(readline.question('Digite um numero: '))
    var arrayP = []
    var arrayI = []
    for(var x = 1; x <= n; x++){
        if(x % 2 == 0){
            arrayP.push(x)
        } else {
            arrayI.push(x)
        }
    }

    console.log('Números pares da sequência: '+arrayP)
    console.log('Números impares da sequência: '+ arrayI)
}

function ex15(){
    var readline = require('readline-sync')

    var n = Number.parseInt(readline.question('Digite um numero: '))

    var cont = 0
    for(var x = 1; x <= n; x++){
        if (n % x == 0  ){
            cont++
        }
    }

    if (cont == 2 ){
        console.log('O número informado é primo.')

    } else {
        console.log('O número informado não é primo.')
    }
}

function ex16(){
    var readline = require('readline-sync')

    function verificarPrimo(num){
        var cont = 0
        for(var x = 1; x <= num; x++){
            if (num % x == 0  ){
                cont++
            }
        }

        if (cont == 2 ){
            console.log(`${num} primo.`)

        } 
    }

    var n = Number.parseInt(readline.question('Digite um numero: '))

    for (var z = 1; z <= n;  z++){
        verificarPrimo(z)
    }
}

function ex17(){
    
    var somaP = 0
    for (var x = 1 ; x <= 500 ; x++){
        if(x % 2 != 0 && x % 3 == 0){
            somaP += x
        }
    }

    console.log(`a soma detodos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500 é:  ${somaP}`)
}

function ex18(){
    var readline = require('readline-sync')

    var maiorl = menorl = 0
    for(var x = 1 ; x<= 15; x++){
        var n = Number.parseFloat(readline.question('Digite uma altura: '))
        if(x == 1){
            maiorl = menorl = n
        } else {
            if (n > maiorl){
                maiorl = n
                } 
            if (n < menorl){
                menorl = n
            }
        }
    }

    console.log('A maior altura foi: '+ maiorl)
    console.log('A menor altura foi: '+ menorl)
}

function ex19(){
        //media
    // quantidade numero negativo
    // quantidade numero positivo
    //porcentagem numero negativo
    //porcentagem numero positivo

    var readline = require('readline-sync')

    var qntdN = 0
    var qntdP = 0
    var soma = 0
    while(true){
        var n = Number.parseInt(readline.question("Digite um numero (0 para): "))
        if (n == 0){
            break
        } else {
            if (n > 0){
                qntdP++
            } else {
                qntdN++
            }
            soma += n
        }
    }

    var total = qntdN+qntdP
    var media = (soma/(total))
    var pP = (qntdP / total)*100
    var pN = (qntdN / total)*100


    console.log('A média dos números é: '+ media)
    console.log('A quantidade de números negativos é: '+ qntdN)
    console.log('A quantidade de números positivos é: '+ qntdP)
    console.log('A porcentagem de números negativos é: '+ pN+'%')
    console.log('A porcentagem de números positivos é: '+pP+'%')

}

function ex20(){
        var readline = require('readline-sync')

    function gerarSequencia(de, ate, num){
        flag = false
        for (vax = de; de <= ate; de++){
            if(num == de){
                flag = true
                break
            }
        }
        return flag
    }

    while(true){
        var n = Number.parseInt(readline.question('digite um numero para eu verificar: '))
        if (n < 0){
            break
        } else {
            if (gerarSequencia(0, 25, n)){
                console.log('o número digitado está em uma sequência de 0 a 25.')
            } 
            else if (gerarSequencia(26, 50, n)){
                console.log('o número digitado está em uma sequência de 26 a 50.')
            }
            else if (gerarSequencia(51, 75, n)){
                console.log('o número digitado está em uma sequência de 51 a 75.')

            } else if (gerarSequencia(76, 100, n)){
                console.log('o número digitado está em uma sequência de 76 a 100.')
            } else {
                console.log('Não está em nenhuma sequencia.')
            }

        }
    }
}

function ex21(){
    var readline = require('readline-sync')

    function verificarParImpar(num){
        // false impar e true par
        if (num % 2 == 0){
            return true
        } else {
            return false
        }
    }
    
    var somaPar = 0
    var qntdpar = qntdImpar = 0
    var somaTotal = 0
    while(true){
        var n = Number.parseInt(readline.question("algum  numero para computarmos (0 encerra)..."))
        if (n === 0){
            break
        } else {
            if (verificarParImpar(n)){
                somaPar += n
                qntdpar++
            } else {
                qntdImpar ++
            }
        } somaTotal += n
    }
    
    console.log('Quantidade de impares é: '+ qntdImpar)
    console.log('Quantidade de pares é: '+ qntdpar)
    console.log('Media valores pares: '+ somaPar/(qntdImpar+qntdpar))
    console.log('A media geral é: '+ somaTotal/(qntdpar+qntdImpar))
     
}

function ex22(){
    for(var x = 100; x <= 200; x++){
        if(x % 2 != 0){
            console.log(x)
        }
    }
}

function ex23(){
    var readline = require('readline-sync')
    var n = Number.parseInt(readline.question("digite um numero para tabuada: "))

    for ( var x = 1; x <= n; x ++){
        console.log(`${n}x${x} = ${n*x}`)
    }
}

function ex24(){
    var realine = require('readline-sync')

    var inicial = Number.parseInt(realine.question('valor inicial: '))
    var razao = Number.parseInt(realine.question('razao: '))

    for (var x = 1; x <= 10; x++){
        console.log('termo: '+ (inicial + (x*razao)))
    }


}

function ex25(){
    var realine = require('readline-sync')

    var inicial = Number.parseInt(realine.question('valor inicial: '))
    var razao = Number.parseInt(realine.question('razao: '))

    for (var x = 1; x <= 10; x++){
        console.log('termo: '+  ( inicial*(razao**x) ) )
    }

}

function ex26(){
    var realine = require('readline-sync')

    var inicial = Number.parseInt(realine.question('valor que deseja analisar: '))

    var acumulador = 1
    for (var x = 1; x <= inicial; x++){
        acumulador *= x
        console.log('\r' +acumulador)
    }
}
function  funcionarContlista3(ex){
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
        case 26:
            ex26()
            break
    }
}

module.exports = {funcionarContlista3, imprirEscolha}