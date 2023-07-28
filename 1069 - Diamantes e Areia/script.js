var input = require('fs').readFileSync('./1069 - Diamantes e Areia/stdin', 'utf8');
var lines = input.split('\n');

/*
João está trabalhando em uma mina, tentando retirar o máximo que consegue de diamantes "<>". Ele deve excluir todas as particulas de areia "." do processo e a cada retirada de diamante, novos diamantes poderão se formar. Se ele tem como uma entrada .<...<<..>>....>....>>>., três diamantes são formados. O primeiro é retirado de <..>, resultando  .<...<>....>....>>>. Em seguida o segundo diamante é retirado, restando .<.......>....>>>. O terceiro diamante é então retirado, restando no final .....>>>., sem possibilidade de extração de novo diamante.

Entrada
Deve ser lido um valor inteiro N que representa a quantidade de casos de teste. Cada linha a seguir é um caso de teste que contém até 1000 caracteres, incluindo "<,>, ."

Saída
Você deve imprimir a quantidade de diamantes possíveis de serem extraídos em cada caso de entrada.
*/

const retirada = parseInt(lines[0]);

for (let x = 1; x <= retirada; x++) {
    const mina = String(lines[x].replace(".","")); // Nao consegui fazer um replace funcional

    let esq = 0;
    let fechou = 0;

    for (let y = 0; y < mina.length; y++) {
        if (mina[y] == "<") {
            esq++;
        }
        else if (esq > 0 && mina[y] == ">") {
            esq--;
            fechou++;
        }
    }

    console.log(fechou)
}
