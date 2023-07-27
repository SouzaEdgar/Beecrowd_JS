var input = require('fs').readFileSync('./2850 - Papagaio Poliglota/stdin', 'utf8');
var lines = input.split('\n');


/*
Humberto tem um papagaio muito esperto. Quando está com as duas pernas no chão, o papagaio fala em português. Quando levanta a perna esquerda, fala em inglês. Por fim, quando levanta a direita fala em francês. Nico, amigo de Humberto, ficou fascinado com o animal. Em sua emoção perguntou: “E quando ele levanta as duas?”. Antes que Humberto pudesse responder, o papagaio gritou: “Ai eu caio, idiota!”.

Entrada
A entrada consiste de diversos casos de teste. Cada caso de teste consiste uma string informando qual a situação de levantamento de pernas do papagaio.

Saída
Para cada condição de levantamento de pernas do papagaio, imprima a linguagem que ele utilizará. Caso ele levante as duas pernas, imprima “caiu”. Quebre uma linha a cada caso de teste.
*/

//              0          1           2           3
const resp = ['esquerda', 'direita', 'nenhuma', 'as duas'];

for (let x = 0; x < lines.length; x++) {
    if (resp[0] === lines[x].replace("\r","")) {console.log("ingles")} else
    if (resp[1] === lines[x].replace("\r","")) {console.log("frances")} else
    if (resp[2] === lines[x].replace("\r","")) {console.log("portugues")} else
    if (resp[3] === lines[x].replace("\r","")) {console.log("caiu")}
}