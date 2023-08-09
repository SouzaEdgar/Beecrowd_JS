var input = require('fs').readFileSync('./1048 - Aumento de Salario/stdin', 'utf8');
var lines = input.split('\n');

/*
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

Salário	Percentual de Reajuste
0 - 400.00          15%
400.01 - 800.00     12%
800.01 - 1200.00    10%
1200.01 - 2000.00    7%
Acima de 2000.00     4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.
*/


if (input >= 0 && input <= 400) {
    console.log(`Novo salario: ${(parseFloat(input)+(input*0.15)).toFixed(2)}\nReajuste ganho: ${(input*0.15).toFixed(2)}\nEm percentual: 15 %`);
} else 
if (input >= 400.01 && input <= 800) {
    console.log(`Novo salario: ${(parseFloat(input)+(input*0.12)).toFixed(2)}\nReajuste ganho: ${(input*0.12).toFixed(2)}\nEm percentual: 12 %`);
} else
if (input >= 800.01 && input <= 1200) {
    console.log(`Novo salario: ${(parseFloat(input)+(input*0.10)).toFixed(2)}\nReajuste ganho: ${(input*0.10).toFixed(2)}\nEm percentual: 10 %`);
} else
if (input >= 1200.01 && input <= 2000) {
    console.log(`Novo salario: ${(parseFloat(input)+(input*0.07)).toFixed(2)}\nReajuste ganho: ${(input*0.07).toFixed(2)}\nEm percentual: 7 %`);
} else
if (input > 2000) {
    console.log(`Novo salario: ${(parseFloat(input)+(input*0.04)).toFixed(2)}\nReajuste ganho: ${(input*0.04).toFixed(2)}\nEm percentual: 4 %`);
}
