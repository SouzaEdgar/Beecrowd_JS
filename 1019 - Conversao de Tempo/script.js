var input = require('fs').readFileSync('./1019 - Conversao de Tempo/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

let h = 0;
let m = 0;
let s = 0;
while (input > 0) {
    if (input > 3600) h++, input-= 3600;
    else if (input > 60) m++, input -= 60;
    else s++, input--;
}

console.log(`${h}:${m}:${s}`);