
const readline = require("readline-sync")

function bannerEntrada(){
    console.log("=====================")
    console.log('TRABALHO FINAL')
    console.log("=====================")
    console.log('Escolha uma lista de exercicios\n 1°LISTA \n 2°LISTA \n 3°LISTA \n 4-Sair\n')
}

function imprimirLista(quantidade){
    for (var x = 1; x <= quantidade; x++){
        console.log(`[+]-Exercicio ${x}`)
    }
    return Number.parseInt(readline.question("qual exercicio quer executar ? ")) // pergunta o exercicio a ser executado

}

function formatar(x){
    var valor  = [0,0,0]
    if (x <= 9){
        valor[2] = x
    } else {
        var unidade = (x%10)
        var dezena = (Math.floor(x/10))
        valor[1] = dezena
        valor[2] = unidade
    }
    return valor.join('')
}



function jsonListas(nLista, quantidadeExerci){ // numero da lista e quantidade de exercicio dela
    var listaComExerc = []
   
    for (var nExercicio = 0; nExercicio <= quantidadeExerci; nExercicio++){
        listaComExerc.push({ 'caminho':`..//v2\\lista${nLista}\\ex${formatar(nExercicio)}_ifro_lista_${nLista}.js` })
    }
    return listaComExerc
}


function validarEntradaExercicio(quantidadeEx, valorUsuario, listaEx){
    if(valorUsuario >  quantidadeEx || valorUsuario < 1){
        console.log('Opção inválida')
    } else{
        require(listaEx[valorUsuario].caminho)
    }

}

function verificarEntrada(){
    var escolhaLista = Number.parseInt(readline.question("Escolha a lista: "))
    switch (escolhaLista){
        case 1:
            var quantidadeExs = 40 // quantidade exs
            var lista = 1 // numero da lista
            var y = imprimirLista(quantidadeExs) // retorna a escolha do usuário
            var lista1 = jsonListas(lista, quantidadeExs) // lista 1 , 40 exercicios
            validarEntradaExercicio(quantidadeExs, y, lista1)
            
            break
        case 2:
            var quantidadeExs = 25
            var lista = 2
            var y = imprimirLista(25)
            var lista2 = jsonListas(lista, quantidadeExs)
            validarEntradaExercicio(quantidadeExs, y, lista2)

            break

        case 3:
            var quantidadeExs = 26
            var lista = 3
            var y = imprimirLista(26)
            var lista3 = jsonListas(lista, quantidadeExs)
            validarEntradaExercicio(quantidadeExs, y, lista3)

            break

        case 4:
            process.exit()

            break
    }
 
 setTimeout(() => { principal(); }, 6000);
 
}


function principal(){
    console.clear()
    bannerEntrada()
    verificarEntrada()
}

principal()
