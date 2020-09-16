// Function to check assertion for equal primitive types
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

// Test case: primitive data types
const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
const abc = { a: '1', b: '2', c: '3'};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// Test case: arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
