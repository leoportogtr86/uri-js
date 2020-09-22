const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let idade_dias = Number(lines.shift())

let anos = Math.floor(idade_dias / 365)
let meses = Math.floor((idade_dias % 365) / 30)
let dias = idade_dias - (meses * 30 + anos * 365)
console.log(anos + ' ano(s)\n' + meses + ' mes(es)\n' + dias + ' dia(s)');