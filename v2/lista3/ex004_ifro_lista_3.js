
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