var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let linha = lines.shift().split(' ')

let a = Number(linha[0])
let b = Number(linha[1])
let c = Number(linha[2])

let maior_ab = ((a + b + Math.abs(a - b))) / 2

let maior_abc = ((maior_ab + c + Math.abs(maior_ab - c))) / 2

console.log(maior_abc + ' eh o maior');