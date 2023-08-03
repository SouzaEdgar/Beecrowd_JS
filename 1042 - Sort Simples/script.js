var input = require('fs').readFileSync('./1042 - Sort Simples/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
*/

let normal = input.split(' ');
let ord = [];

for (let x in normal) {
    ord.push(normal[x]);
}
ord = ord.sort(function(a,b){return a - b});
for (let y in ord) {
    console.log(parseInt(ord[y]));
}
console.log();
for (let z in normal) {
    console.log(parseInt(normal[z]));
}
