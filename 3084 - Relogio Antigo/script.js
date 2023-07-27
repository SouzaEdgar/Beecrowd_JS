var input = require('fs').readFileSync('./3084 - Relogio Antigo/stdin', 'utf8');
var lines = input.split('\n');

/*
Ezequiel possui um relógio muito antigo e valioso, mas algumas características dele foram perdidas com o passar do tempo. Os ponteiros ainda marcam as horas e os minutos corretamente, mas seus marcadores e números se tornaram ilegíveis.

Ezequiel utiliza um instrumento auxiliar para observar os ângulos formados pelos ponteiros de hora e de minuto. Ele pede para você ajudá-lo escrevendo um programa que indica a hora e o minuto do momento da medição. Considere que às 00:00 os dois ângulos medidos são iguais a zero e que ambos os ponteiros só se movimentam quando se completa uma unidade de tempo (hora ou minuto) correspondente.

Entrada
A entrada consiste em vários casos de teste e é finalizada pelo fim de arquivo (EOF). Cada linha corresponde a um caso de teste e contém dois valores inteiros h e m (0 ≤ h, m < 360) que são, respectivamente, os ângulos medidos sobre os ponteiros de hora e de minuto.

Saída
Para cada caso de teste, imprima uma única linha com o valor da hora e do minuto no formato "hh:mm" (sem aspas), conforme pode ser observado nos exemplos.
*/
// Regra de tres, onde rNum1 = valor atribuido ao 360 (num1) que para as horas tem valor de 12 e para os minutos tem valor 60
//  enquanto queremos encontrar o rNum2 que seria o valor atribuido ao num2 (input)
function regra3(rNum1, num2) {
    return ("00" + ((rNum1*num2)/360)).slice(-2);
}

for (let x = 0; x < lines.length; x++) {
    const h = parseInt(lines[x].split(" ")[0]);
    const m = parseInt(lines[x].split(" ")[1]);

    console.log(`${regra3(12, h)}:${regra3(60, m)}`);
}