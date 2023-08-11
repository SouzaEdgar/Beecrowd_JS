var input = require('fs').readFileSync('./1050 - DDD/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.
*/

let ddd = new Map();
ddd.set('61', 'Brasilia');
ddd.set('71', 'Salvador');
ddd.set('11', 'Sao Paulo');
ddd.set('21', 'Rio de Janeiro');
ddd.set('32', 'Juiz de Fora');
ddd.set('19', 'Campinas');
ddd.set('27', 'Vitoria');
ddd.set('31', 'Belo Horizonte');

let resposta = '';

for (let [key, value] of ddd) {
    if (parseInt(key) === parseInt(input)) {
        resposta = value;
        break;
    } else {
        resposta = 'DDD nao cadastrado'
    }
}
console.log(resposta);
