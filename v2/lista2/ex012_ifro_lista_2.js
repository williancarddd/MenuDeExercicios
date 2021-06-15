/**Crie um algoritmo que seja capaz de descobrir,por meio de perguntas lógicas(verdadeiro ou falso) sobre características físicas,um animal que o usuário tenha emmente. Considere os animais: pato, águia, galinha,avestruz, pinguim, morcego, ornitorrinco ,  baleia, tubarão, lambari,enguia e arraia */


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
    
} else {
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



