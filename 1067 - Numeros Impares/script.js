var input = require('fs').readFileSync('./1067 - Numeros Impares/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.
*/

for (let x = 0; x <= parseInt(input); x++) {
    if (x % 2 !== 0 ) console.log(x);
}
