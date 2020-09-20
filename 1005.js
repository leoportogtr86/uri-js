var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let a = lines.shift()
let b = lines.shift()

let media_ponderada = (a * 3.5 + b * 7.5) / 11

console.log('MEDIA = ' + media_ponderada.toFixed(5))