var n = (require('fs').readFileSync('/dev/stdin', 'utf8')).toString();
var m = parseFloat(n)

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

if (m >= 0 && n <= 400) {
    console.log(`Novo salario: ${(m+(n*0.15)).toFixed(2)}\nReajuste ganho: ${(n*0.15).toFixed(2)}\nEm percentual: 15 %`);
} else 
if (m >= 400.01 && n <= 800) {
    console.log(`Novo salario: ${(m+(n*0.12)).toFixed(2)}\nReajuste ganho: ${(n*0.12).toFixed(2)}\nEm percentual: 12 %`);
} else
if (m >= 800.01 && n <= 1200) {
    console.log(`Novo salario: ${(m+(n*0.10)).toFixed(2)}\nReajuste ganho: ${(n*0.10).toFixed(2)}\nEm percentual: 10 %`);
} else
if (m >= 1200.01 && n <= 2000) {
    console.log(`Novo salario: ${(m+(n*0.07)).toFixed(2)}\nReajuste ganho: ${(n*0.07).toFixed(2)}\nEm percentual: 7 %`);
} else
if (m > 2000) {
    console.log(`Novo salario: ${(m+(n*0.04)).toFixed(2)}\nReajuste ganho: ${(n*0.04).toFixed(2)}\nEm percentual: 4 %`);
}
