// Function to check assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑${emojiFail}🛑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${emojiPass}${emojiPass}${emojiPass} Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Declare emojis
const emojiFail = String.fromCodePoint(0x274C); //declared an emoji but there may be an easier way
const emojiPass = String.fromCodePoint(0x2705); //get some feedback
// Testing
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 5.5);
assertEqual(3, '3');
assertEqual("Orange", "Orange");