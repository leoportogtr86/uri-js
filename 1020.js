const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let tempo = Number(lines.shift())
let horas = Math.floor(tempo / (60 * 60))
let minutos = Math.floor(((tempo - horas) / 60) % 60)
let segundos = Math.floor(tempo % 60)
console.log(horas + ':' + minutos + ':' + segundos);