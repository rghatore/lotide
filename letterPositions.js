// Function to check assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (actual !== expected) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
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

//Function to print out a message if arrays are equal
const assertArraysEqual = function(actual, expected) {
  // check to see if the arrays are equal, then print passed
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴🔴 Assertion Failed: ${actual} === ${expected} 🔴🔴`);
  }
};

// this function counts the number of times a particular letter appears in a string
// does not show letters which do not exist in the input string
// letters: input string
const letterPositions = function(letters) {
  const results = {};
  let index = 0;

  for (const item of letters) {
    if (item !== ' ')  {
      if (results[item]) {
        results[item].push(index);
      } else {
        results[item] = [index];
      }
    }
    index++;
  }
  return results;
};

// Test Case:
const word = "hello world";
const result1 = letterPositions(word);
console.log(result1);

assertArraysEqual(result1["h"], [0]);
assertEqual(result1["z"], undefined);
assertArraysEqual(result1["l"], [2, 3, 9]);
assertEqual(result1[" "], undefined);