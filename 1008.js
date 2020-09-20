var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let id = lines.shift()
let horas = lines.shift()
let valor_por_hora = lines.shift()
let salario = lines.shift()

salario = horas * valor_por_hora

console.log('NUMBER = ' + id + '\nSALARY = U$ ' + salario.toFixed(2))