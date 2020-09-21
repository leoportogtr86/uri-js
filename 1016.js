const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')



let distancia = Number(lines.shift())

let tempo = distancia * 2

console.log(tempo + ' minutos');