var input = require('fs').readFileSync('./1241 - Encaixa ou Nao II/stdin', 'utf8');
var lines = input.split('\n');

/*
Paulinho tem em suas mãos um novo problema. Agora a sua professora lhe pediu que construísse um programa para verificar, à partir de dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.

Entrada
A entrada consiste de vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste consiste de dois valores A e B maiores que zero, cada um deles podendo ter até 1000 dígitos.

Saída
Para cada caso de entrada imprima uma mensagem indicando se o segundo valor encaixa no primeiro valor, confome exemplo abaixo.
*/

for (let x = 1; x <= lines[0]; x++) {
    const valor = lines[x].split(' ');
    const a = BigInt(valor[0]).toString();
    const b = BigInt(valor[1]).toString();

    if(a.slice(- b.length) === b) console.log('encaixa');
    else console.log('nao encaixa');
}
