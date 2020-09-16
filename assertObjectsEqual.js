/* assertEqual not yet used
// Function to check assertion for equal primitive types
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (actual !== expected) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
  }
};
*/
//Function to compare arrays
//Check for blank arrays
//Compare length and elements
const eqArrays = function(first, second) {
  //Compare length first because if length is different then arrays are different
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
// Returns true if both objects have identical keys with identical values.
// Otherwise it return a false
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // have to loop through the object
    for (const item in object1) {
      if (Object.prototype.hasOwnProperty.call(object1, item)) {
        if (object1[item] !== object2[item]) {
          if (!eqArrays(object1[item], object2[item])) {
            return false;
          }
        }
      }
    }
    return true; // loop would only run if object length and key - value pairs are equal
  } else {
    return false; // objects can't be equal if the length isn't equal
  }
};
// Function to print out a message whether objects are equal
const assertObjectsEqual = function(actual, expected) {
  // importing util library
  const inspect = require('util').inspect;
  // check to see if the objects are equal, then print passed
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} 🟢🟢`);
  } else if (!eqObjects(actual, expected)) {
    console.log(`🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🔴🔴`);
  }
};

// Test case: primitive data types
const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
const abc = { a: '1', b: '2', c: '3'};
const empty1 = {};
const empty2 = {};

assertObjectsEqual(ab, ba); // expecting to pass
assertObjectsEqual(ab, abc);  // expecting to fail
assertObjectsEqual(ab, empty1);  // expecting to fail

// Test case: arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc); // expecting to pass
assertObjectsEqual(cd, cd2); // expecting to fail
assertObjectsEqual(empty1, dc); // expecting to fail
assertObjectsEqual(empty1, empty2); // expecting to pass