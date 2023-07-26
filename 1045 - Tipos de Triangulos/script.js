var input = require('fs').readFileSync('./1045 - Tipos de Triangulos/stdin', 'utf8');
var lines = input.split('\n');

/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
    se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    se A² = B² + C², apresente a mensagem: TRIANGULO RETANGULO
    se A² > B² + C², apresente a mensagem: TRIANGULO OBTUSANGULO
    se A² < B² + C², apresente a mensagem: TRIANGULO ACUTANGULO
    se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
*/

const nums = input.split(" ");
const a = parseFloat(nums[0]);
const b = parseFloat(nums[1]);
const c = parseFloat(nums[2]);

if (a > 0 && b > 0 && c > 0) {
    const lA = Math.max(a, b, c);
    let lB = 0.0;
    let lC = 0.0;

    if (lA === a) {lB = Math.max(b, c), lC = Math.min(b, c);}
    else if (lA === b) {lB = Math.max(a, c), lC = Math.min(a, c);}
    else if (lA === c) {lB = Math.max(a, b), lC = Math.min(a, b);}

    if (lA >= (lB+lC)) {
        console.log("NAO FORMA TRIANGULO");
    } else {
        if ((lA*lA) === ((lB*lB) + (lC*lC))) {console.log("TRIANGULO RETANGULO");}
        if ((lA*lA) > ((lB*lB) + (lC*lC))) {console.log("TRIANGULO OBTUSANGULO");}
        if ((lA*lA) < ((lB*lB) + (lC*lC))) {console.log("TRIANGULO ACUTANGULO");}
        if (lA === lB && lB === lC) {console.log("TRIANGULO EQUILATERO");}
        if ((lA !== lB && (lB === lC || lC === lA)) || (lB !== lC && (lC === lA || lA === lB))) {console.log("TRIANGULO ISOSCELES");}
    }
}

