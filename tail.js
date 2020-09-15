//Declare emojis
//const emojiFail = String.fromCodePoint(0x274C); //declared an emoji but there may be an easier way
const emojiPass = String.fromCodePoint(0x2705); //get some feedback
// Function to check assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Function to get the first element of an array
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

//Test Case: Check returned array
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
assertEqual(testCase2.length, 2);
assertEqual(testCase2[0], undefined);
assertEqual(testCase2[1], "");