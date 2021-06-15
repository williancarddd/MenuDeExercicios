/*A  padaria  Hotpão  vende  uma  certa  quantidade  de  pães  franceses  e  uma  quantidade  de broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer  saber  quanto  arrecadou  com  a  venda  dos  pães  e  broas (juntos),  e  quanto  deve  guardar numa conta de poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular os dados solicitados*/

var broas = 25 // valores hipoteticos
var paes = 50

var tax_paes = 0.12
var tax_broas = 1.50

var arrecadado =((paes*tax_paes)+(broas*tax_broas))

console.log("o valor  arrecadado foi "+ arrecadado.toLocaleString('pt-br',{style:'currency', currency:'BRL'}) )

console.log('valor para poupança é '+(arrecadado*0.1).toLocaleString('pt-br',{style:'currency', currency:'BRL'}))