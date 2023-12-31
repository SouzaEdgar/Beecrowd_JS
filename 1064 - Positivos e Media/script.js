var input = require('fs').readFileSync('./1064 - Positivos e Media/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
*/
let posVal = 0;
let avg = 0;

for (let x in lines) {
    if (parseFloat(lines[x]) > 0) {
        posVal++;
        avg += parseFloat(lines[x]);
    }
}
console.log(`${posVal} valores positivos\n${(avg/posVal).toFixed(1)}`);
