var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')

let nome = lines.shift()
let salario_fixo = lines.shift()
let total_vendas = lines.shift()
let comissao = (15 / 100) * Number(total_vendas)
let total = Number(salario_fixo) + Number(comissao)

console.log("TOTAL = R$ " + total.toFixed(2));

//