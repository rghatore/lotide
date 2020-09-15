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
//Function to compare arrays
//Check for blank arrays
//Compare length and elements
const eqArrays = function(first, second) {
  //Compare length first because if length is different then arrays are different
  if (first.length === second.length) {
    // loop through the elements of an array
    for (let i = 0; i < first.length; i++) {
      //if any elements do not match, then return false
      if (first[i] !== second[i]) {
        return false;
      }
    }
    // loop will only keep running if all elements match
    return true;
  } else {
    return false; // because length is not equal
  }
};

// Test Case: empty arrays
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(['empty'], []), true);
assertEqual(eqArrays([], [1, 2]), false);

// Test Case: random arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
assertEqual(eqArrays([NaN], [Number('hello')]), true); // NaN is tricky to work with