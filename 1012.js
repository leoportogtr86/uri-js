var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let linha = lines.shift().split(' ')

let a = Number(linha[0])
let b = Number(linha[1])
let c = Number(linha[2])



const PI = 3.14159

let area_triangulo_retangulo = (a * c) / 2
let area_circulo = PI * c * c
let area_trapezio = ((a + b) / 2) * c
let area_quadrado = b * b
let area_retangulo = a * b

console.log('TRIANGULO: ' + area_triangulo_retangulo.toFixed(3) + '\nCIRCULO: ' + area_circulo.toFixed(3) + '\nTRAPEZIO: ' + area_trapezio.toFixed(3) + '\nQUADRADO: ' + area_quadrado.toFixed(3) + '\nRETANGULO: ' + area_retangulo.toFixed(3));