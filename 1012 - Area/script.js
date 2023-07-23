var input = require('fs').readFileSync('./1012 - Area/stdin', 'utf8');
var lines = parseInt(input.split('\n'));

/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

const a = parseFloat(input.split(" ")[0]);
const b = parseFloat(input.split(" ")[1]);
const c = parseFloat(input.split(" ")[2]);

// triangulo
const tri = parseFloat((a*c)/2).toFixed(3);
// circulo
const cir = parseFloat(3.14159*(c**2)).toFixed(3);
// trapezio
const tra = parseFloat(((a+b)*c)/2).toFixed(3);
// quadrado
const qua = parseFloat(b**2).toFixed(3);
// retangulo
const ret = parseFloat(a*b).toFixed(3);

console.log(`TRIANGULO: ${tri}\nCIRCULO: ${cir}\nTRAPEZIO: ${tra}\nQUADRADO: ${qua}\nRETANGULO: ${ret}`);
