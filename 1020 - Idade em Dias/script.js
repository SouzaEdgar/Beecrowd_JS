var input = require('fs').readFileSync('./1020 - Idade em Dias/stdin', 'utf8');

/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
*/

let ano = 0;
let mes = 0;
let dia = 0;

while (input > 0) {
    if (input >= 365) {
        ano++;
        input= input - 365;
    } else
    if (input >= 30) {
        mes++;
        input -= 30;
    } else {
        dia++;
        input--;
    }
}

console.log(`${ano} ano(s)\n${mes} mes(es)\n${dia} dia(s)`);
