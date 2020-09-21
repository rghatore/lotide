const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

//Test Case: check original stays the same
const words = ["hello", "world", "lighthouse"];
without(words, ["Lighthouse"]);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

// Test Case: check with random arrays
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['loopy', 'lighthouse'], []), ['loopy', 'lighthouse']);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([], [1, 2]), []);
assertArraysEqual(without([1, 1, 1, 2, 3, 4], [1, 1, 3]), [2, 4]); //this caused error
without([1, 1, 1, 2, 3, 4], [1, 1, 3]); //debugging