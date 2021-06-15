
var contador = 0
for(let x = 1000; x < 2000; x++){
    if (x % 11 == 5){
        console.log(`O número ${x} resta 5 quando dividido por 11.` )
        contador +=1
    }
}

console.log(contador)