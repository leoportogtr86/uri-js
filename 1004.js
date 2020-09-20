var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let a = lines.shift()
let b = lines.shift()

let prod = Number(a) * Number(b)

console.log('PROD = ' + prod);