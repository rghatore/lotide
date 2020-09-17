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

// this function copies elements from an array until it reaches the callback return a truthy value
const takeUntil = (array, callback) => {
  const result = [];
  for (let item of array) {
    // check for the stopping condition
    // console.log(callback(item)); // debugging
    if (callback(item)) {
      // return resulting array
      return result;
    }
    // copy elements of the array starting from the first
    result.push(item);
  }
  return result;
};

// Test Case:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["Hello", "Lighthouse", "Labs"];
const results2 = takeUntil(data2, x => x.length >= 5);
assertArraysEqual(results2, []);
console.log('---');

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === ',');
assertArraysEqual(results3, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('---');

const data4 = [2, 4, 6, 8, 10];
const results4 = takeUntil(data4, x => x % 2 !== 0);
assertArraysEqual(results4, [2, 4, 6, 8, 10]); // this test caught an error