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
const head = function(array) {
  return array[0];
};

// Testing
console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");