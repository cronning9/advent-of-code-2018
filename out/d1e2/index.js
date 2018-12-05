"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const ReadInput_1 = require("../lib/ReadInput");
const mutateFrequency = (n, frequency) => {
    if (n[0] === '+') {
        return frequency + Number(n.slice(1));
    }
    if (n[0] === '-') {
        return frequency - Number(n.slice(1));
    }
    throw new Error('invalid input');
};
function runWithSet(numbers, bench = false) {
    if (bench)
        console.time('withSet');
    const history = new Set();
    let frequency = 0;
    while (true) {
        for (const n of numbers) {
            frequency = mutateFrequency(n, frequency);
            if (history.has(frequency)) {
                console.log(frequency);
                if (bench)
                    console.timeEnd('withSet');
                return;
            }
            history.add(frequency);
        }
    }
}
function runWithArray(numbers, bench = false) {
    if (bench)
        console.time('withArray');
    const history = [];
    let frequency = 0;
    while (true) {
        for (const n of numbers) {
            frequency = mutateFrequency(n, frequency);
            if (history.includes(frequency)) {
                console.log(frequency);
                if (bench)
                    console.timeEnd('withArray');
                return;
            }
            history.push(frequency);
        }
    }
}
function runWithMap(numbers, bench = false) {
    if (bench)
        console.time('withMap');
    const history = new Map();
    let frequency = 0;
    while (true) {
        for (const n of numbers) {
            frequency = mutateFrequency(n, frequency);
            if (history.get(frequency)) {
                console.log(frequency);
                if (bench)
                    console.timeEnd('withMap');
                return;
            }
            history.set(frequency, true);
        }
    }
}
async function main() {
    const numbers = await ReadInput_1.ReadInput.readFileAsArray(path.join('./inputs', 'd1.txt'));
    runWithSet(numbers);
    runWithSet(numbers);
    runWithSet(numbers);
    runWithSet(numbers);
    runWithMap(numbers);
    runWithMap(numbers);
    runWithMap(numbers);
    runWithMap(numbers);
    runWithSet(numbers, true);
    runWithMap(numbers, true);
}
main();
//790
