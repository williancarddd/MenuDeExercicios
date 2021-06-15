
var somaP = 0
for (var x = 1 ; x <= 500 ; x++){
    if(x % 2 != 0 && x % 3 == 0){
        somaP += x
    }
}

console.log(`a soma detodos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500 é:  ${somaP}`)