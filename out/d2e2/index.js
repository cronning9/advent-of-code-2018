"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const ReadInput_1 = require("../lib/ReadInput");
const IntegerOpterations_1 = require("../lib/IntegerOpterations");
const resultString = (x, y) => {
    const xArr = x.split('');
    const yArr = y.split('');
    const diffIndices = [];
    for (const i of IntegerOpterations_1.IntegerOperations.intRange(0, x.length - 1)) {
        if (xArr[i] !== yArr[i])
            diffIndices.push(i);
        if (diffIndices.length > 1)
            return null;
    }
    return x.substring(0, diffIndices[0]) + x.substring(diffIndices[0] + 1);
};
async function main() {
    console.time('bench');
    const labels = await ReadInput_1.ReadInput.readFileAsArray(path_1.default.join('./inputs', 'd2.txt'));
    for (const [i, label] of Object.entries(labels)) {
        for (const [j, comp] of Object.entries(labels)) {
            if (i === j)
                continue;
            const result = resultString(label, comp);
            if (result) {
                console.timeEnd('bench');
                console.log(result);
                return;
            }
        }
    }
}
main();
