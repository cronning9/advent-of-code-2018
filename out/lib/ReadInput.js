"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const newline = require('os').EOL;
var ReadInput;
(function (ReadInput) {
    ReadInput.readFileAsync = (file, encoding) => {
        const options = encoding ? { encoding } : null;
        return new Promise((resolve, reject) => {
            fs.readFile(file, options, (err, data) => {
                if (err)
                    reject(err);
                resolve(data);
            });
        });
    };
    ReadInput.readFileAsArray = async (file) => {
        const input = await ReadInput.readFileAsync(file, 'utf8');
        if (typeof input !== "string") {
            throw new Error('Buffer support not implemented');
        }
        return input.split(newline);
    };
})(ReadInput = exports.ReadInput || (exports.ReadInput = {}));
