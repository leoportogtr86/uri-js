const { match } = require('assert')

var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8')
var lines = input.split('\n')


let x = Number(lines.shift())
let notas_100 = Math.floor(x / 100)
let notas_50 = Math.floor((x - (notas_100 * 100)) / 50)
let notas_20 = Math.floor((x - (notas_100 * 100 + notas_50 * 50)) / 20)
let notas_10 = Math.floor((x - (notas_100 * 100 + notas_50 * 50 + notas_20 * 20)) / 10)
let notas_5 = Math.floor((x - (notas_100 * 100 + notas_50 * 50 + notas_20 * 20 + notas_10 * 10)) / 5)
let notas_2 = Math.floor((x - (notas_100 * 100 + notas_50 * 50 + notas_20 * 20 + notas_10 * 10 + notas_5 * 5)) / 2)
let notas_1 = Math.floor((x - (notas_100 * 100 + notas_50 * 50 + notas_20 * 20 + notas_10 * 10 + notas_5 * 5 + notas_2 * 2)) / 1)
console.log(x + '\n' + notas_100 + ' nota(s) de R$ 100,00\n' + notas_50 + ' nota(s) de R$ 50,00\n' + notas_20 + ' nota(s) de R$ 20,00\n' + notas_10 + ' nota(s) de R$ 10,00\n' + notas_5 + ' nota(s) de R$ 5,00\n' + notas_2 + ' nota(s) de R$ 2,00\n' + notas_1 + ' nota(s) de R$ 1,00');