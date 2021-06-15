/* Construa  um  algoritmo  para  calcular  a  distância  entre  dois  pontos  do  plano  cartesiano. Cada ponto é um par ordenado (x,y). */

var x1 = 1
var x2 = 5
var y1 = 3
var y2 = 3

var distanciaDoisPontos = Math.sqrt( (x2-x1)**2 + (y2-y1)**2 ) //raizQuadrada((x1-x2)**2 + (y2-y1)**2)

console.log(` A distância entre as duas coordenadas informadas é : ${distanciaDoisPontos.toFixed(2)} ` )
