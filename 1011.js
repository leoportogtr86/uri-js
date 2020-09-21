var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let r = lines.shift()

const PI = 3.14159

let volume = (4 / 3) * PI * (r * r * r)

console.log('VOLUME = ' + volume.toFixed(3))