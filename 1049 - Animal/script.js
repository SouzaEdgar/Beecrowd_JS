var input = require('fs').readFileSync('./1049 - Animal/stdin', 'utf8');
var lines = input.split('\n');

/*
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.



Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida
*/

if (lines[0].replace('\r','') === 'vertebrado') {
    if (lines[1].replace('\r','') == 'ave') {
        if (lines[2].replace('\r','') == 'carnivoro') {
            console.log('aguia');
        } else {
            console.log('pomba');
        }
    } else {
        if (lines[2].replace('\r','') == 'onivoro') {
            console.log('homem');
        } else {
            console.log('vaca');
        }
    }
} else {
    if (lines[1].replace('\r','') == 'inseto') {
        if (lines[2].replace('\r','') == 'hematofago') {
            console.log('pulga');
        } else {
            console.log('lagarta');
        }
    } else {
        if (lines[2].replace('\r','') === 'hematofago') {
            console.log('sanguessuga');
        } else {
            console.log('minhoca');
        }
    }
}
