var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let raio = lines.shift()

const PI = 3.14159

let area = PI * raio * raio

console.log('A=' + area.toFixed(4));