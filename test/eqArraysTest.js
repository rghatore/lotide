const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Case: empty arrays
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(['empty'], []), false);
assertEqual(eqArrays([], [1, 2]), false);

// Test Case: random arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
assertEqual(eqArrays([NaN], [Number('hello')]), false); // NaN is tricky to work with
assertEqual(eqArrays(['a', 'b', 'c'], 'abc'), false); // this test FAILED earlier
