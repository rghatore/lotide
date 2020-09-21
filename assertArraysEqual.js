const eqArrays = require('./eqArrays');

//Function to print out a message if arrays are equal
const assertArraysEqual = function(actual, expected) {
  // check to see if the arrays are equal, then print passed 
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
  }
};

module.exports = assertArraysEqual;
