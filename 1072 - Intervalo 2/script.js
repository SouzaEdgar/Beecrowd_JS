var input = require('fs').readFileSync('./1072 - Intervalo 2/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
*/

let ttIN = 0;
let ttOUT = 0;
for (let x = 1; x <= parseInt(lines[0]); x++) {
    if (parseInt(lines[x]) >= 10 && parseInt(lines[x]) <= 20) ttIN++;
    else ttOUT++;
}

console.log(`${ttIN} in\n${ttOUT} out`);
