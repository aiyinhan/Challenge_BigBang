import * as fs from 'fs';

const result: (number | string)[] = [];
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIGBANG");
    } else if (i % 3 === 0) {
        result.push("BIG");
    } else if (i % 5 === 0) {
        result.push("BANG");
    } else {
        result.push(i);
    }
}

const jsonResult = JSON.stringify(result);

fs.writeFileSync('output.json', jsonResult);

console.log(result);