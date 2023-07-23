var input = require('fs').readFileSync('./1021 - Notas e Moedas/stdin', 'utf8');
var lines = parseInt(input.split('\n'));


let valor = parseFloat(input).toFixed(2);

let cem = 0;
let cin = 0;
let vin = 0;
let dez = 0;
let cic = 0;
let doi = 0;

let mRea = 0;
let mCin = 0;
let mVin = 0;
let mDez = 0;
let mCic = 0;
let mUm = 0;

if (valor > 0 && valor < 1000000.00) {
    while (valor >= 2) {
        if (valor >= 100) {cem += 1, valor -= 100}
        else if (valor >= 50) {cin += 1, valor -= 50}
        else if (valor >= 20) {vin += 1, valor -= 20}
        else if (valor >= 10) {dez += 1, valor -= 10}
        else if (valor >= 5) {cic += 1, valor -= 5}
        else if (valor >= 2) {doi += 1, valor -= 2}
        valor = parseFloat(valor).toFixed(2);
    }
    while (valor > 0) {
        if (valor >= 1) {mRea += 1, valor -= 1}
        else if (valor >= 0.50) {mCin += 1, valor -= 0.50}
        else if (valor >= 0.25) {mVin += 1, valor -= 0.25}
        else if (valor >= 0.10) {mDez += 1, valor -= 0.10}
        else if (valor >= 0.05) {mCic += 1, valor -= 0.05}
        else if (valor >= 0.01) {mUm += 1, valor -= 0.01}
        valor = parseFloat(valor).toFixed(2);
    }
}

let resposta = `NOTAS:\n${cem} nota(s) de R$ 100.00\n${cin} nota(s) de R$ 50.00\n${vin} nota(s) de R$ 20.00\n${dez} nota(s) de R$ 10.00\n${cic} nota(s) de R$ 5.00\n${doi} nota(s) de R$ 2.00\nMOEDAS:\n${mRea} moeda(s) de R$ 1.00\n${mCin} moeda(s) de R$ 0.50\n${mVin} moeda(s) de R$ 0.25\n${mDez} moeda(s) de R$ 0.10\n${mCic} moeda(s) de R$ 0.05\n${mUm} moeda(s) de R$ 0.01`;

console.log(resposta);
