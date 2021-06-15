function imprirEscolha(){
    for(var x= 1; x<= 40; x++){
        console.log(`#EXERCICIO-${x}`)
    }
    console.log('#0 para retornar')
}
function bannerExercicio(ex){
    console.log('\n\nExecutando exercico '+ex+'\n')
}




function ex1(){
    var a = 50
    var b = 10
    console.log(`${a*b}m`)
}
function ex2(){
    var cavalos_haras = 300 // 300 cavalos
    console.log(cavalos_haras* 4 +' ferraduras') //quantidade de cavalos vezes a quantidade de patas/ferradura
}
function ex3(){
    var broas = 25 // valores hipoteticos
    var paes = 50

    var tax_paes = 0.12
    var tax_broas = 1.50

    var arrecadado =((paes*tax_paes)+(broas*tax_broas))

    console.log("o valor  arrecadado foi "+ arrecadado.toLocaleString('pt-br',{style:'currency', currency:'BRL'}) )

    console.log('valor para poupança é '+(arrecadado*0.1).toLocaleString('pt-br',{style:'currency', currency:'BRL'}))
}
function ex4(){
    var ano = Number.parseInt(window.prompt("digite sua idade"))
    var mess = Number.parseInt(window.prompt('digite quantos messes faltam para seu aniversário: '))
    var dias = Number.parseInt(window.prompt('digite quantos dias faltam para completar mais 1 mes de seu nascimento:  '))
    var resultado = (ano*365) +((12-mess)*30) + dias
    console.log(`dias ${resultado} `)
}
function ex5(){
    
    var preçoPorLitro = 2.60
    var valorPagamento = 260
    //  valor que a pessoa pagou para abastecer x litros = z
    //  cada litro custa y reais
    // quantidade de litros que ela abasteceu foi  z/y


    var litrosAbastecidos = (valorPagamento/preçoPorLitro)

    if (litrosAbastecidos > 1){
        console.log((valorPagamento/preçoPorLitro)+" litros foram abastecidos")
    }
    else if(litrosAbastecidos == 1){
        console.log('foi abastecido 1 litro')
    }
    else{
        console.log('ops')
    }

}
function ex6(){
    //ex005_ifro_lista_1.js

    /*O  restaurante  a quilo  Bem-Bão  cobra  R$12,00  por  cada  quilo  de  refeição.  Escreva  um algoritmo que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato*/

    var quiloRefeição = 12

    var quiloAlimento = 2
    var quiloTotal = quiloAlimento +quiloRefeição 
    var valorPagar = (quiloTotal*quiloAlimento)
    console.log(valorPagar.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))

}
function ex7(){
    
/*  Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do  ano.  Esqueça  a  questão  dos  anos  bissextos  e  considere  sempre  que  um  mês  possui  30 dias.*/

    var dias = 5
    var mês = (7-1)// estou simbolizando a retirada de 1 mês completo

    var diasPassados = (mês*30)+dias
    console.log('dias passadados desde o inicio do ano foi: '+ diasPassados +  " dias")
}
function ex8(){
    
    var nota1 = 9
    var nota2 = 8
    var nota3 = 9.5
    var media =((nota1*1) + ( nota2*2) + ( nota3*3))/ 6

    console.log("a média do aluno é: "+media.toFixed(2))

}
function ex9(){
    /*Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida  respectivamente  por  10,  12  e  15  reais.  Construa  um  algoritmo  em  que  o  usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado */

    var valorP = 10 
    var valorM = 12
    var valorG = 15

    var qntP = 5
    var qntM = 2
    var qntG = 4

    var valorCompra  = ((valorP*qntP)+(valorM*qntM)+(valorG*qntG))
    console.log('o valor arrecadado será: '+ valorCompra.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))
}
function ex10(){
    /* Construa  um  algoritmo  para  calcular  a  distância  entre  dois  pontos  do  plano  cartesiano. Cada ponto é um par ordenado (x,y). */

    var x1 = 1
    var x2 = 5
    var y1 = 3
    var y2 = 3

    var distanciaDoisPontos = Math.sqrt( (x2-x1)**2 + (y2-y1)**2 ) //raizQuadrada((x1-x2)**2 + (y2-y1)**2)

    console.log(` A distância entre as duas coordenadas informadas é : ${distanciaDoisPontos.toFixed(2)} ` )


}

function ex11(){
        //ex_11_ifro_lista_1.js
    /*Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um algoritmo  para  converter  este  tempo  em  anos,  meses  e  dias.  Assuma  que  cada  mês  possui sempre 30 dias*/

    var temposSemAcidentes = 5000

    var anos = Number.parseInt( (temposSemAcidentes/360) )
    var messes = Number.parseInt(( (temposSemAcidentes%360) /30) )
    var dias = (temposSemAcidentes%360)%30

    console.log(` ${anos} anos ${messes} messes ${dias} dias sem acidentes ` )


}
function ex12(){
        //ex012_ifro_lista_1.js
    /* Faça  um  algoritmo  para  ler  o  salário  de  um  funcionário  e  aumentá-Io  em  15%.  Após  o aumento,  desconte 8%  de  impostos.  Imprima  o  salário  inicial,  o  salário  com  o  aumento  e  o salário final */

    var salario = 1250
    var  aumentoSalario = salario*1.15
    var  desconoImposto = aumentoSalario*0.92


    var mBRL = function(x){
        return x.toLocaleString('pt-br', {style:"currency", currency:'BRL'})
    }
    console.log("seu salário era: "+mBRL(salario)+" após o aumento ficou: "+mBRL(aumentoSalario)+" e com desconto agora é: "+mBRL(desconoImposto))

}
function ex13(){
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

}
function ex14(){
    //ex012_ifro_lista_1.js
    /*  Calcule a área de uma pizza que possui um raio R (pi=3.14). */

    var raioPizza = 10
    console.log('a area da pizz é: '+ ( (raioPizza**2)*3.14 ).toFixed(0) +' cm² ' ) //pi*(R**2)
}
function ex15(){
    /*. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um  algoritmo  para  ler  o  valor  total  da  conta  e  imprimir  quanto  cada  um  deve  pagar,  mas faça com  que  Carlos  e  André  não  paguem  centavos.  Ex:  uma conta  de  R$101,53  resulta  em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe */


    var valorTotal = 101.53
    var cent = valorTotal % 1

    var todosP = valorTotal/ 3
    console.log((todosP% 1))
    var cetSomado =  ((todosP % 1)*3)


    console.log(`Carlos:${todosP} André: ${todosP} Falipe: ${cetSomado+Number(todosP.toFixed(0))}`)
}
function ex16(){
    /*A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de  queijo,  uma  fatia  de  presunto  e  uma  rodela  de  hambúrguer.  Sabendo  que  cada  fatia  de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra */

    var quantiaSanduiche = 150

    var pesoQueijo_1h = 100
    var pesoPresunto_1h = 50
    var pesoHambuerguer_1h = 100

    console.log(`a quantidade de queijo em quilos é ${(pesoQueijo_1h*quantiaSanduiche)/1000}kg\n
    a quantidade de presunto em quilos é ${(pesoPresunto_1h*quantiaSanduiche)/1000}kg\n
    a quantidade de hamburguer em quilos é ${(pesoHambuerguer_1h*quantiaSanduiche)/1000}kg\n
    `)
}
function ex17(){
    
    /*Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um  algoritmo  para  ler  uma  temperatura  Celsius  e  imprimi-Ia  em  Fahrenheit  (pesquise  como fazer este tipo de conversão
    */

    var celsius = 0
    var temF = (9*celsius+160)/5

    console.log(`${celsius}°C em Farenheit é ${temF}°F`)
}
function ex18(){
    /*A  empresa  Hipotheticus  paga  R$10,00  por  hora  normal  trabalhada,  e  R$15,00  por  hora extra.  Faça  um  algoritmo  para  calcular  e  imprimir  o  salário  bruto  e  o  salário  líquido  de  um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos */

    var hTrabalhada = 176;
    var hExtra = 20;
    var sBruto = (hTrabalhada*10) + (hExtra*15);
    var sLiquido = sBruto*0.9;

    var cValor = function (salarioN){
        return Number(salarioN).toLocaleString('pt-br', {style:'currency', currency: 'BRL'});

    };
    console.log(`salário bruto é ${cValor(sBruto)} e o liquido é ${cValor(sLiquido)}`);
}
function ex19(){
    /*A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para  indicar  o  tipo  de  alimento  que  ele  deve  consumir.  Sabendo  que  o  anel  com  chip  custa R$4,00  e  o  anel  de  alimento  custa  R$3,50,  faça  um  algoritmo  para  calcular  o  gasto  total  da granja para marcar todos os seus frangos.  */

    var nFragos = 70000

    var txAnelPe1 = 4
    var txAnelPe2 = 6

    console.log(`o custo total de anéis será: ${(nFragos*(txAnelPe1+txAnelPe2)).toLocaleString("pt-br", {style:'currency', currency:'BRL'}) } reais pra ${nFragos} frangos`)
}
function ex20(){
        /*
    Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa
    */

    var qBluas = 10
    var nNovelos = 20

    console.log(`a quantidade de novelos gastos por blusa é ${nNovelos/qBluas}`)
    
}
function ex21(){
    /*A  fábrica  de  refrigerantes  Meia-Cola  vende  seu  produto  em  três formatos:  lata  de  350  ml, garrafa  de  600  ml  e  garrafa  de  2  litros.  Se  um  comerciante  compra  uma  determinada quantidade de cada formato, faça um algoritmo para calcular  quantos litros de refrigerante ele comprou*/

    var garrafas1 =  5
    var garrafas2 = 155
    var garrafas3 = 15

    var lModelo1 = 350/1000
    var lModelo2 = 600/100
    var lModelo3 =  2000/1000

    var litrosComprados = ((garrafas1*lModelo1)+(garrafas2*lModelo2)+(garrafas3*lModelo3))

    console.log(`você comprou ${litrosComprados.toFixed(2)} litros`)
}
function ex22(){
    /*Pedrinho  tem  um  cofrinho  com  muitas  moedas,  e  deseja  saber  quantos  reais  conseguiu poupar.  Faça  um  algoritmo  para  ler  a  quantidade  de  cada  tipo  de  moeda,  e  imprimir  o  valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero */

    var qmoeda1c = 0
    var qmoeda5 = 20
    var qmoeda10 = 20
    var qmoeda25 = 30
    var qmoeda50 = 50
    var qmode1real = 100

    var valorCofre = (qmode1real*1) +(qmoeda5*0.05)+(qmoeda10*0.1)+(qmoeda1c*0.01)+ (qmoeda25*0.25)+(qmoeda50*0.5)
    console.log(`o cofrinho possui ${valorCofre.toLocaleString('pt-br', {style:"currency", currency:'BRL'})} reais`)
    
}
function ex23(){
        /*Num  dia  de  sol,  você  deseja  medir  a  altura  de  um  prédio,  porém, a  trena  não  é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio
    */

    var sombraPredio = 10
    var sombraHomem = 2
    var alturaHomem = 1.8

    var alturaPredio = (alturaHomem*sombraPredio)/sombraHomem

    console.log("altura do predio é "+ alturaPredio+ ' metros')

}
function ex25(){
    /*Calcule o volume de uma caixa d'água cilíndrica. */

    var Raio = 8
    var altura = 15
    var π = 3.14
    var volumeCaixaCilindrica = ( π*(Raio**2) ) * (altura)

    console.log("o volume do cilindro é "+ volumeCaixaCilindrica.toFixed(2) +'m³')
}
function ex26(){
    /* Faça  um  algoritmo  que  receba  três  números,  calcule  e  mostre  a  multiplicação  desses números*/

    var n1 = 32
    var n2 = 7
    var n3 = 5

    console.log((n1*n2*n3))
}
function ex27(){
        /* Faça  um  algoritmo  que  receba  dois  números,  calcule  e  mostre  a  divisão  do  primeiro número  pelo  segundo.  Sabe-se  que  o  segundo  número  não  pode  ser  zero,  portanto  não  é necessário se preocupar com validações */

    var n1 = 53
    var n2 = 0

    if (n2 == 0){
        console.log("não é possível dividir por zero.")

    }else{
        console.log(n1/n2)
    }
}
function ex28(){
    /*Faça  um  algoritmo  que  receba  duas  notas,  calcule  e  mostre  a  média  ponderada  dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota */

    var nota1 = 5
    var nota2 = 6
    var media = ((nota1*2)+(nota2*3))/5
    console.log(media)

}
function ex29(){
    /* Faça  um  algoritmo  que  receba  o  preço  de  umproduto,  calcule  e  mostre  o  novo  preço, sabendo-se que este sofreu um desconto de 10% */

    var proD = 1678

    var valorLiquido =  proD*0.9

    console.log(valorLiquido)
}
function ex30(){
    /*Um  funcionário  recebe  um  salário  fixo  mais  4%  de  comissão  sobre  as  vendas.  Faça  um algoritmo  que  receba  o  salário  fixo  de  um  funcionário  e  o  valor  de  suas  vendas,  calcule  e mostre a comissão e o salário final do funcionário */

    var sFixo  = 1200
    var vComissao = 3000

    var sFinal = (sFixo+(vComissao*0.04))

    console.log(sFinal)
}
function ex31(){
    /**Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: a) o novo peso se a  pessoa  engordar  15%  sobre  o  peso  digitado;  b)  o  novo  peso  se  a  pessoa  emagrecer  20% sobre o peso digitado */

    var pesoDigitado = 84

    var pesoEngordar = (pesoDigitado*1.15)
    var pesoEmagrecer = (pesoDigitado*0.8)

    console.log(pesoEngordar, pesoEmagrecer)
}
function ex32(){
    /**Faça  um  algoritmo  que  receba  o  peso  de  uma  pessoa  em  quilos,  calcule  e  mostre  esse peso em gramas. */

    var pesoKg = 80

    var pesoG = pesoKg*1000

    console.log(pesoG)
}
function ex33(){
    /** Faça  um  algoritmo  que  calcule  e  mostre  a  área  de  um  trapézio.  Sabe-se  que:  A  =  (base maior + base menor)* altura)/2
     
    */

    var bMenor= 10
    var bMaior = 20
    var altura = 33
    
    var areaT = ((bMaior+bMenor)*altura)/2
    
    console.log(areaT)
}
function ex34(){
    /**Faça um algoritmo que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lado; */

    var lado = 4

    var areaQ= lado**2

    console.log(areaQ)
}
function ex35(){
    /** Faça  um  algoritmo  que  calcule  e  mostre  a  área  de  um  losango.  Sabe-se  que:  A  = (diagonal_maior * diagonal_menor)/2 */

    var dMaior = 5
    var dMenor = 4

    var areaL = (dMaior*dMenor)/2

    console.log(areaL)
}
function ex36(){
    /** Faça  um  algoritmo  que  receba  o  valor  do  salário  mínimo  e  o  valor  do  salário  de  um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário.  */

    var SalarioM = 980

    var SalarioRecebe = 5678

    console.log(((SalarioRecebe/SalarioM).toFixed(0)))
}
function ex37(){
    /**Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário */

    var Ntabuada = 9 

    for (var i = 1 ;i !=( 10+1 );i++){
        console.log(`${Ntabuada} x ${i} = ${Ntabuada*i} `)
    }
}
function ex38(){
        /**
     *  Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:  a)  a  idade  dessa  pessoa  em  anos;  b)  a  idade  dessa  pessoa  em  meses;  c)  a  idade dessa pessoa em dias; d) a idade dessa pessoa em semanas.
     */

    var anoNascimento = 2002
    var anoAtual = new Date().getFullYear()

    var idade = (anoAtual-anoNascimento)
    var idadeMesses = idade*12
    var idadeDias = idadeMesses*30
    var idadeSemanas = idadeDias/7
    console.log('idade  dessa  pessoa  em  anos: ' + idade )
    console.log('idade  dessa  pessoa  em  meses: '+ idadeMesses)
    console.log('idade dessa pessoa em dias: '+ idadeDias)
    console.log('idade dessa pessoa em semanas: '+idadeSemanas.toFixed(0))
}
function ex39(){
   /**joão  recebeu  seu  salário  de  R$  1200,00  e  precisa  pagar  duas  contas  (C1=R$200,00  e C2=R$120,00)  que  estão  atrasadas.  Como  as  contas  estão  atrasadas,  João  terá  de  pagar multa  de  2%  sobre  cada  conta.  Faça  um  algoritmo  que  calcule  e  mostre  quanto  restará  do salário do João */

    var sjoao = 1200
    var conta1Multa = (200*0.02) +200
    var conta2Multa = (120*0.2) + 120

    console.log(sjoao-(conta1Multa+conta2Multa)) 
}
function ex40(){
    /**Faça um algoritmo que receba o valor dos catetos de umtriângulo, calcule e mostre o valor da hipotenusa */

    var ct1 = 3
    var ct2 = 4
    var hipo = Math.sqrt(((ct1**2)+(ct2**2) ))

    console.log(hipo.toFixed(0))
}



function funcionarContlista1(ex){
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
        //////////////////////////////////////
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
    //////////////////////////////
        case 24:
            ex24()
            break
        case 25:
            ex25()
            break
        case 26:
            ex26()
            break
        case 27:
            ex27()
            break
        case 28:
            ex28()
            break
        case 29:
            ex29()
            break
        case 30:
            ex30()
            break
        case 31:
            ex31()
            break
        case 32:
            ex32()
            break
        case 33:
            ex33()
            break
        case 34:
            ex34()
            break
        //////////////////////
        case 35:
            ex35()
            break
        case 36:
            ex36()
            break
        case 37:
            ex37()
            break
        case 38:
            ex38()
            break
        case 39:
            ex39()
            break
        case 40:
            ex40()
            break

    }

}

module.exports = {funcionarContlista1, imprirEscolha}