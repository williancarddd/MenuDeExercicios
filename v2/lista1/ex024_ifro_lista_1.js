/*Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça  um  algoritmo  para  calcular  quantos  litros  de  água  e  de  suco  são  necessários  para  se fazer X litros de refresco (informados pelo usuário).  */

var litrosRefresco = 2

var litrosSuco = (litrosRefresco/5)
var litrosAgua = litrosRefresco - litrosSuco

console.log(` Para ${litrosRefresco} litros de refresco é necessário ${litrosSuco} litro de suco e ${litrosAgua} litros de agua`)