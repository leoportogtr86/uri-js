var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let x = Number(lines.shift())
let y = Number(lines.shift())

let consumo_medio = x / y

console.log(consumo_medio.toFixed(3) + ' km/l');