const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test Case:
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']), ['d', 'e']);