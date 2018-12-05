"use strict";
const fs = require('fs');
const newline = require('os').EOL;
const path = require('path');
const readFileAsync = (file, encoding) => {
    const options = encoding ? { encoding } : null;
    return new Promise((resolve, reject) => {
        fs.readFile(file, options, (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
};
const readFileAsArray = async (file) => {
    const input = await readFileAsync(file, 'utf8');
    if (typeof input !== "string") {
        throw new Error('Buffer support not implemented');
    }
    return input.split(newline);
};
async function main() {
    let frequency = 0;
    const numbers = await readFileAsArray(path.join(__dirname, 'input.txt'));
    for (const n of numbers) {
        if (n[0] === '+') {
            frequency += Number(n.slice(1));
        }
        if (n[0] === '-') {
            frequency -= Number(n.slice(1));
        }
    }
    console.log(frequency);
}
main();
