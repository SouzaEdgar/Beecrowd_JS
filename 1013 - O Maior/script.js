var input = require('fs').readFileSync('./1013 - O Maior/stdin', 'utf8');
var lines = input.split('\n');

/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

function maior(num1, num2) {
    return ((num1 + num2 + Math.abs(num1 - num2))/2);
}

const nums = input.split(" ");
const a = parseInt(nums[0]);
const b = parseInt(nums[1]);
const c = parseInt(nums[2]);
const mAB = maior(a, b);

console.log(`${maior(mAB, c)} eh o maior`);