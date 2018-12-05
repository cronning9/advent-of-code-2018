"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const ReadInput_1 = require("../lib/ReadInput");
async function main() {
    let frequency = 0;
    const numbers = await ReadInput_1.ReadInput.readFileAsArray(path.join('./inputs', 'd1.txt'));
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
