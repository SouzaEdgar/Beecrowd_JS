var input = require('fs').readFileSync('./1044 - Multiplos/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.
*/

const nums = input.split(' ');
let maior = 0;
let menor = 0;
if (parseInt(nums[0]) > parseInt(nums[1])) {
    maior = nums[0];
    menor = nums[1];
} else {
    maior = nums[1];
    menor = nums[0];
}
if (maior%menor === 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}
