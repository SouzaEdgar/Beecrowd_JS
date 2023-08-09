var input = require('fs').readFileSync('./1065 - Pares entre cinco Numeros/stdin', 'utf8');
var lines = input.split('\n');

/*
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/
let par = 0;
for (let x in lines) {
    if (parseFloat(lines[x])%2==0) par++;
}
console.log(`${par} valores pares`);