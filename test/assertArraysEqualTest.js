const assertArraysEqual = require('../assertArraysEqual');

//Testing
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, '2', 3]));
console.log(assertArraysEqual(['Lighthouse', 'Labs'], ["Lighthouse", "Labs",]));
console.log(assertArraysEqual([], []));
