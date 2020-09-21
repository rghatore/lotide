const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

// Test Case:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["Hello", "Lighthouse", "Labs"];
const results2 = takeUntil(data2, x => x.length >= 5);
assertArraysEqual(results2, []);
console.log('---');

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === ',');
assertArraysEqual(results3, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('---');

const data4 = [2, 4, 6, 8, 10];
const results4 = takeUntil(data4, x => x % 2 !== 0);
assertArraysEqual(results4, [2, 4, 6, 8, 10]); // this test caught an error