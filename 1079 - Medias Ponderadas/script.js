var input = require('fs').readFileSync('./1079 - Medias Ponderadas/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.
*/

for (let x = 1; x <= parseInt(lines[0]); x++) {
    const nums = lines[x].split(' ');

    const a = nums[0];
    const b = nums[1];
    const c = nums[2];

    console.log(`${(a*0.2 + b*0.3 + c*0.5).toFixed(1)}`);
}
