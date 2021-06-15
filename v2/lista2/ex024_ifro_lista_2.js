/**O cardápio de uma lanchonete é o seguinte:EspecificaçãoPreço unitário100 Cachorro quente1,10101 Bauru simples1,30102 Bauru c/ovo1,50103 Hamburger1,10104 Cheeseburger1,30105 Refrigerante1,00Escrever um algoritmo que leia o código do item pedido,a quantidade e calcule o valor a serpago por aquele lanche. Considere que a cada execuçãosomente será calculado um item */


//ler código do pedido
//ler a quantidade do pedido
//calcular o valor a ser pago, conforme a quantidade de lanches e a tabela abaixo
//101 Bauru simples 1,30
//102 Bauru c/ovo 1 ,50
//103 Hamburger 1,10
//104 Cheeseburger 1,30
//105 Refrigerante 1,00

console.log('101 Bauru simples 1,30\n\
102 Bauru c/ovo 1 ,50\n\
103 Hamburger 1,10\n\
104 Cheeseburger 1,30\n\
105 Refrigerante 1,00')
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
