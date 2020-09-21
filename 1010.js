var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let linha1 = lines.shift()
let linha2 = lines.shift()

let codigo_peca1 = linha1.split(' ')[0]
let quantidade_peca1 = linha1.split(' ')[1]
let valor_por_peca1 = linha1.split(' ')[2]


let codigo_peca2 = linha2.split(' ')[0]
let quantidade_peca2 = linha2.split(' ')[1]
let valor_por_peca2 = linha2.split(' ')[2]




let total = quantidade_peca1 * valor_por_peca1 + quantidade_peca2 * valor_por_peca2

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))