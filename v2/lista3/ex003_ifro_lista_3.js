

var valor = 0.06
function formatar(numero=0){
    return numero.toLocaleString('pt-br', {style:'currency', currency:"BRL"})
}

for (var x = 1 ; x <= 200; x ++){
    console.log(`O valor ${formatar(valor) } foi multiplicado por ${x} e ficou: ${formatar(valor*x)}`)
}