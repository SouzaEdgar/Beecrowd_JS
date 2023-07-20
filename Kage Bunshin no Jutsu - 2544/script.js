var input = require('fs').readFileSync('./Kage Bunshin no Jutsu - 2544/stdin', 'utf8');
var lines = input.split('\n');

/* 
O Kage Bunshin no Jutsu (ou a "técnica dos clones de sombra", para os lusofalantes) é uma técnica milenar bastante utilizada em batalhas ninja.

Quando utilizada, a técnica cria uma cópia idêntica de seu usuário. Desta forma, se um dado ninja usa a técnica, passam a existir dois destes ninjas (o original e a cópia).

A técnica sempre é executada por todos os ninjas existentes no momento. Desta forma, se a técnica for utilizada novamente, passam a existir quatro ninjas idênticos ao original (os dois anteriores e mais duas cópias), e assim por diante.

Há N cópias de um dado ninja (incluindo o original). Sua tarefa é determinar quantas vezes a técnica foi utilizada.

Entrada
A entrada contém vários casos de teste. Cada caso contém uma linha com o número N (1 ≤ N ≤ 106). É garantido que o valor de N é tal que é possível obter exatamente N cópias de um ninja utilizando a técnica (incluindo o original).

A entrada termina com fim-de-arquivo (EOF).

Saída
Para cada caso de teste, imprima uma linha contendo o número de vezes que a técnica foi utilizada.
*/

/*
 A ideia aqui é fazer uma contagem
 Input >> resulta no numero de ninjas e clones previamente
 Ex:
 1 >> 1 ninja (portanto nenhum jutsu foi utilizado)
 4 >> 4 ninjas (portanto o jutsu foi utilizado 2 vezes (1 ninja usa 1 vez, viram 2 que usam de novo e viram 4, logo 2 vezes foi utilizado o jutsu))

 Como o codigo deve reagir para caso a contagem seja um valor impar?
 >>> Deixar invalido ate o momento
*/
for (x in lines) {
    let ninja = parseInt(lines[x]);
    if (ninja >= 1 && ninja <= 1000000) {
        if (ninja == 1) {
            console.log(0);
        } else if (ninja % 2 === 0) {
            console.log(ninja/2);
        }
    }
}

