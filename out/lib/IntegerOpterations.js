"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntegerOperations;
(function (IntegerOperations) {
    IntegerOperations.intRange = (startAt, endAt) => [...Array(endAt - startAt + 1).keys()].map(x => x + startAt);
})(IntegerOperations = exports.IntegerOperations || (exports.IntegerOperations = {}));
