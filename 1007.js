var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let a = lines.shift()
let b = lines.shift()
let c = lines.shift()
let d = lines.shift()

let diferenca = (a * b - c * d)

console.log('DIFERENCA = ' + diferenca)