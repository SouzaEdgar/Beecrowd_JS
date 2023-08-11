var input = require('fs').readFileSync('./1066 - Pares Impares Positivos e Negativos/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/

let par = 0;
let imp = 0;
let pos = 0;
let neg = 0;

for (let x in lines) {
    if (!Number.isNaN(parseInt(lines[x]))) {
        if (parseInt(lines[x]) % 2 === 0) par++;
        else imp++;
    
        if (parseInt(lines[x]) > 0) pos++;
        else 
        if (parseInt(lines[x]) < 0) neg++;
    }
}

console.log(`${par} valor(es) par(es)\n${imp} valor(es) impar(es)\n${pos} valor(es) positivo(s)\n${neg} valor(es) negativo(s)`);
