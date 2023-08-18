var input = require('fs').readFileSync('./1114 - Senha Fixa/stdin', 'utf8');
var lines = input.split('\n');

/*
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 

Entrada
A entrada é composta por vários casos de testes contendo valores inteiros.

Saída
Para cada valor lido mostre a mensagem correspondente à descrição do problema.
*/

for (let x in lines) {
    if(Number.isInteger(parseInt(lines[x]))) {
        if (parseInt(lines[x]) === 2002) {
            console.log('Acesso Permitido');
            break;
        } else {
            console.log('Senha Invalida');
        }
    }
}
