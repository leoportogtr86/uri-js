const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let tempo = Number(lines.shift())
let velocidade_media = Number(lines.shift())

let distancia_percorrida = tempo * velocidade_media



let combustivel_gasto = distancia_percorrida / 12

console.log(combustivel_gasto.toFixed(3));