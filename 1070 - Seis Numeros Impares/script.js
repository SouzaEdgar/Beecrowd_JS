var input = require('fs').readFileSync('./1070 - Seis Numeros Impares/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.
*/

let contador = 0;
let x = parseInt(input);
while (contador < 6) {
    if (x%2 !== 0) {
        console.log(x);
        contador++;
    }
    x++;
}
