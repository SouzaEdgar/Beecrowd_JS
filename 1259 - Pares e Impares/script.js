var input = require('fs').readFileSync('./1259 - Pares e Impares/stdin', 'utf8');
var lines = input.split('\n'); 
/*
Considerando a entrada de valores inteiros não negativos, ordene estes valores segundo o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Sendo que deverão ser apresentados os pares em ordem crescente e depois os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N <= 105) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas conterão, cada uma delas, um valor inteiro não negativo.

Saída
Apresente todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo abaixo.
*/

let even = [];
let odd  = [];

for (let x = 1; x <= lines[0]; x++) {
    if (lines[x]%2 === 0) {
        even.push(lines[x].replace('\r',''));
    } else {
        odd.push(lines[x].replace('\r',''));
    }
}
even = even.sort(function(a, b){return a - b});
odd = odd.sort(function(a,b){return b - a});

for (let y = 0; y < even.length; y++) {
    console.log(even[y]);
}
for (let z = 0; z < odd.length; z++) {
    console.log(odd[z]);
}
