var input = require('fs').readFileSync('./Cedulas - 1018/stdin', 'utf8');
var lines = parseInt(input.split('\n'));

/**
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
 */



/*
 Ponto flutuante (irao utilizar no maximo 2 casas)
 Notas: 100 50 20 10 5 2
 Moedas: 1 0.50 0.25 0.10 0.5 0.01

 0 < INPUT < 1000000.00

 PONTO FLUTUANTE com "."
 .toFixed(2) // Vai tratar como String
 parseFloat(X) // Ira tratar como float

 Portanto
 parseFloat(numero.toFixed(2))
*/


