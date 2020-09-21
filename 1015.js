const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let linha1 = lines.shift().split(' ')
let linha2 = lines.shift().split(' ')




let x1 = Number(linha1[0])
let y1 = Number(linha1[1])


let x2 = Number(linha2[0])
let y2 = Number(linha2[1])


let distancia = Math.sqrt((x2 - x1) * (x2 - x1) + ((y2 - y1) * (y2 - y1)))

console.log(distancia.toFixed(4));