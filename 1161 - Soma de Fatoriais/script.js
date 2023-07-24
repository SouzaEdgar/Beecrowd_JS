var input = require('fs').readFileSync('./1161 - Soma de Fatoriais/stdin', 'utf8');
var lines = parseInt(input.split('\n')); // Não irei alterar essa variavel pois se trata de uma var padrão do BeeCrowd

/*
Leia dois valores inteiros M e N indefinidamente. A cada leitura, calcule e escreva a soma dos fatoriais de cada um dos valores lidos. Utilize uma variável apropriada, pois cálculo pode resultar em um valor com mais de 15 dígitos.

Entrada
O arquivo de entrada contém vários casos de teste. Cada caso contém dois números inteiros M (0 ≤ M ≤ 20) e N (0 ≤ N ≤ 20). O fim da entrada é determinado por eof.

Saída
Para cada caso de teste de entrada, seu programa deve imprimir uma única linha, contendo um número que é a soma de ambos os fatoriais (de M e N).
*/

function fatorial(num) {
    let resultado = 1;
    for (let x = 1; x <= num; x++) {
        resultado *= x;
    }
    return resultado;
}

const nums = input.split("\n");
for (let x in nums) {
    const valor = nums[x].split(" ");
    let num1 = parseInt(valor[0]);
    let num2 = parseInt(valor[1]);

    if (num1 <= 20 && num1 >= 0 && num2 <= 20 && num2 >= 0) {
        if (Number.isSafeInteger(fatorial(num1) || Number.isSafeInteger(fatorial(num2)))) {
            console.log((BigInt(fatorial(num1)) + BigInt(fatorial(num2))).toString());
        } else {
            console.log(fatorial(num1) + fatorial(num2));
        }
    }
}
