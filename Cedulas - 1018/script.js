var input = require('fs').readFileSync('./Cedulas - 1018/stdin', 'utf8'); /* APAGAR O . */
var lines = parseInt(input.split('\n'));

/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

let cem = 0;
let cin = 0;
let vin = 0;
let dez = 0;
let cic = 0;
let doi = 0;
let um = 0;

let valor = lines;

if (lines > 0 && lines < 1000000) {
    while (lines > 0) {
        if (lines >= 100) {cem += 1, lines -= 100}
        else if (lines >= 50) {cin += 1, lines -= 50}
        else if (lines >= 20) {vin += 1, lines -= 20}
        else if (lines >= 10) {dez += 1, lines -= 10}
        else if (lines >= 5) {cic += 1, lines -= 5}
        else if (lines >= 2) {doi += 1, lines -= 2}
        else {um += 1, lines -= 1}
    }
    console.log(`${valor}\n${cem} nota(s) de R$ 100,00\n${cin} nota(s) de R$ 50,00\n${vin} nota(s) de R$ 20,00\n${dez} nota(s) de R$ 10,00\n${cic} nota(s) de R$ 5,00\n${doi} nota(s) de R$ 2,00\n${um} nota(s) de R$ 1,00`);
}
