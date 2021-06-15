//perguntar para o usuário qual lista ele quer abrir
//conforme a lista escolhida, ele importará o arquivo que contém todas as funções com os exercicios

const readline = require("readline-sync")


function bannerEntrada(){
    console.log("=====================")
    console.log('TRABALHO FINAL')
    console.log("=====================")
    console.log('Escolha uma lista de exercicios\n 1°LISTA \n 2°LISTA \n 3°LISTA \n 4-Sair\n')
}

function validarEntrada(){
    var valoUsuário2 = Number.parseInt(readline.question('qual exercicio ?'))
    if(valoUsuário2 == 0){
         main()
    } else {
        return valoUsuário2
    }
}

function verificarEntrada(entrada){ // verifica a escolha da lista
    
    switch (entrada){
        case 1:
           var listaEx1= require('./modulos/contlista1')
            listaEx1.imprirEscolha()
            var entrada1 = validarEntrada()
            listaEx1.funcionarContlista1(entrada1)
          
            break

        case 2:
            //chamar o arquivo e a função para executar os exercicios
            var listaEx2 = require('./modulos/contlista2')
            listaEx2.imprirEscolha()
            var entrada2 = validarEntrada() 
            listaEx2.funcionarContlista2(entrada2)
           
            break
        
        case 3:
            //chamar o arquivo e a função para executar os exercicios
            var lista3 = require('./modulos/contlista3')
            lista3.imprirEscolha()
            var entrada3 = validarEntrada()
            lista3.funcionarContlista3(entrada3)
            break
        
        case 4:
            process.exit(0)
            break
        
        default:
            console.log('Lista Inválida... digite outra\n')
        
        }
    }   


function verificadorSujeira(){ // limpa o terminal
    if (verificarLimpeza ==3){console.clear(); bannerEntrada(); verificarLimpeza = 1}
    else {verificarLimpeza ++}  
}

main()

function main(){ // roda todas as fuções
    console.clear()
    bannerEntrada()
    var valoUsuário = Number.parseInt(readline.question('qual ? '))
    verificarEntrada(valoUsuário)
         
     
}