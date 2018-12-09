"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const ReadInput_1 = require("../lib/ReadInput");
const checkLabel = (label) => {
    const arr = label.split('');
    const map = new Map();
    const result = { hasTwo: false, hasThree: false };
    for (const char of arr) {
        const val = map.get(char);
        if (!val) {
            map.set(char, 1);
        }
        else {
            map.set(char, val + 1);
        }
    }
    const values = map.values();
    for (const value of values) {
        if (result.hasTwo && result.hasThree) {
            break;
        }
        if (value === 2)
            result.hasTwo = true;
        if (value === 3)
            result.hasThree = true;
    }
    return result;
};
async function main() {
    console.time('checks');
    const labels = await ReadInput_1.ReadInput.readFileAsArray(path_1.default.join('./inputs', 'd2.txt'));
    let twosCounter = 0;
    let threesCounter = 0;
    for (const label of labels) {
        const labelResults = checkLabel(label);
        if (labelResults.hasTwo)
            twosCounter++;
        if (labelResults.hasThree)
            threesCounter++;
    }
    const result = twosCounter * threesCounter;
    console.log(result);
    console.timeEnd('checks');
    return result;
}
main();
