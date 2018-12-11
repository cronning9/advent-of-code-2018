"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const IntegerOpterations_1 = require("../lib/IntegerOpterations");
const ReadInput_1 = require("../lib/ReadInput");
const parseClaim = (str) => {
    if (str[0] !== '#') {
        throw new Error('invalid input; aborting.');
    }
    const atmarkIndex = str.indexOf('@');
    const commaIndex = str.indexOf(',');
    const colonIndex = str.indexOf(':');
    const xIndex = str.indexOf('x');
    const id = Number(str.substring(1, atmarkIndex - 1));
    const leftEdge = Number(str.substring(atmarkIndex + 2, commaIndex));
    const topEdge = Number(str.substring(commaIndex + 1, colonIndex));
    const height = Number(str.substring(colonIndex + 2, xIndex));
    const width = Number(str.substring(xIndex + 1));
    return {
        id,
        leftEdge,
        topEdge,
        height,
        width
    };
};
const getKnowableWidth = (claims) => {
    const leftmostClaim = claims.reduce((curr, next) => curr.leftEdge > next.leftEdge ? curr : next);
    return leftmostClaim.leftEdge + leftmostClaim.width;
};
const getKnowableHeight = (claims) => {
    const bottomClaim = claims.reduce((curr, next) => curr.topEdge > next.topEdge ? curr : next);
    return bottomClaim.topEdge + bottomClaim.height;
};
async function main() {
    const list = await ReadInput_1.ReadInput.readFileAsArray(path_1.default.join('./inputs', 'd3.txt'));
    const claims = list.map(x => parseClaim(x));
    const fabricWidth = getKnowableWidth(claims);
    const fabricHeight = getKnowableHeight(claims);
    const fabricField = Array(fabricHeight).map(() => IntegerOpterations_1.IntegerOperations.intRange(0, fabricWidth));
    console.log(fabricField);
}
main();
