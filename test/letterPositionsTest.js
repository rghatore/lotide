const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// Test Case:
const word = "hello world";
const result1 = letterPositions(word);
console.log(result1);

assertArraysEqual(result1["h"], [0]);
assertEqual(result1["z"], undefined);
assertArraysEqual(result1["l"], [2, 3, 9]);
assertEqual(result1[" "], undefined);