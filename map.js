//Function to compare arrays
//Check for blank arrays
//Compare length and elements
const eqArrays = function(first, second) {
  // check to see if they inputs are indeed arrays because [a, b, c] and string 'abc'
  // turn out to be equal otherwise!
  // compare length first because if length is different then arrays are different
  if (Array.isArray(first) && Array.isArray(second) && first.length === second.length) {
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

//Function to print out a message if arrays are equal
const assertArraysEqual = function(actual, expected) {
  // check to see if the arrays are equal, then print passed
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
  }
};

// this function is a copy of map method on an array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test Case:
const words = ["Formula", "One", "is", "the", "best!"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['F', 'O', 'i', 't', 'b']);
assertArraysEqual(map(words, item => item.length), [7, 3, 2, 3, 5]);
assertArraysEqual(map([1, 2, 3], num => num * 1.5), [1.5, 3, 4.5]);
assertArraysEqual(map([2, 4, 6], item => item), [2, 4, 6]);
