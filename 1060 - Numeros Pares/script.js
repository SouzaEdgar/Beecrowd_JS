var input = require('fs').readFileSync('./1060 - Numeros Pares/stdin', 'utf8');
var lines = input.split('\n');

/*
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/
let pares = 0;
for (let x in lines) {
    if (parseFloat(lines[x]) > 0) {
        pares++;
    }
}
console.log(`${pares} valores positivos`);