const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// Test Case:
const words = ["Formula", "One", "is", "the", "best!"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['F', 'O', 'i', 't', 'b']);
assertArraysEqual(map(words, item => item.length), [7, 3, 2, 3, 5]);
assertArraysEqual(map([1, 2, 3], num => num * 1.5), [1.5, 3, 4.5]);
assertArraysEqual(map([2, 4, 6], item => item), [2, 4, 6]);
