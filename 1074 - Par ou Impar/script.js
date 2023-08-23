var input = require('fs').readFileSync('./1074 - Par ou Impar/stdin', 'utf8');
var lines = input.split('\n');

/*Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.

Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.
*/

for (let x = 1; x <= lines[0]; x++) {
    let a = parseInt(lines[x]);
    let even = false;
    let pos = false;
    let nn = false;

    if (Number.isInteger(a)) {
        if (a%2 == 0) {
            even = true;
        }
        if (a > 0) {
            pos = true;
        } else
        if (a === 0) {
            nn = true;
        }

        if (nn) {
            console.log('NULL');
        } else
        if (even) {
            if (pos) {
                console.log('EVEN POSITIVE');
            } else {
                console.log('EVEN NEGATIVE');
            }
        } else {
            if (pos) {
                console.log('ODD POSITIVE');
            } else {
                console.log('ODD NEGATIVE');
            }
        }
    }
}
