var input = require('fs').readFileSync('./2544 - Kage Bunshin no Jutsu/stdin', 'utf8');
var lines = input.split('\n');

for (let x in lines) {
    let clone = parseInt(lines[x]);
    let ninja = 2;
    let jutsu = 1;
    if (clone >= 1 && clone <= 1000000) {
        if (clone == 1) {
            console.log(0);
        } else {
            while(ninja < clone) {
                ninja *= 2;
                jutsu += 1;
            }
            if (ninja == clone) {
                console.log(jutsu);
            }
        }
    }
}
