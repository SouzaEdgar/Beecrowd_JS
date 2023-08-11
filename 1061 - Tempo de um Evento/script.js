var input = require('fs').readFileSync('./1061 - Tempo de um Evento/stdin', 'utf8');
var lines = input.split('\n');

/*
Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

Entrada
Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

Saída
Na saída, deve ser apresentada a duração do evento, no seguinte formato:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.
*/
// nums
const time1 = lines[1].split(' : ');
const time2 = lines[3].split(' : ');

// total
let w = parseInt(lines[2].replace('Dia ', '')) - parseInt(lines[0].replace('Dia ', ''));
let x = parseInt(time2[0]) - parseInt(time1[0]);
let y = parseInt(time2[1]) - parseInt(time1[1]);
let z = parseInt(time2[2]) - parseInt(time1[2]);

if (z < 0) {
    z += 60;
    y -= 1;
}
if (y < 0) {
    y += 60;
    x -= 1;
}
if (x < 0) {
    x += 24;
    w -= 1;
}

console.log(`${w} dia(s)\n${x} hora(s)\n${y} minuto(s)\n${z} segundo(s)`);
