const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let n = Number(lines.shift())

let horas = Math.floor(n / 60 * 60 * 60)
let minutos
let segundos

console.log(horas)