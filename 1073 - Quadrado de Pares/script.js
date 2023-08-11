var input = require('fs').readFileSync('./1073 - Quadrado de Pares/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.
*/

for (let x = 2; x <= parseInt(input); x++) {
    if (x%2 === 0) {
        console.log(`${x}^2 = ${x**2}`);
    }
}

