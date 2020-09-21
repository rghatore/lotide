const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test Case: Manual
console.log(tail([2, 'eh', 530]));
console.log(tail([]));
console.log(tail(['head']));

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test Case 2: Check the returned array elements
const testCase2 = tail(["No tail!"]);
assertEqual(testCase2.length, 0);
assertEqual(testCase2[0], undefined);
assertEqual(testCase2[1], undefined);