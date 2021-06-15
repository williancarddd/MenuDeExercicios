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