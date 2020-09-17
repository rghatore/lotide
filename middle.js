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

// this function returns the middle values of an array
// input is an array. if array only has upto 2 elements, then there is no middle
// if the array has odd elements, then it return one middle. if even, then two middle elements
const middle = function(middleOf) {
  const length = middleOf.length;
  if (length <= 2) {
    return [];  // there is no middle for an array upto two elements
  } else if (length % 2 !== 0) {
    let index = Math.floor(length / 2); // index of the middle element
    return [middleOf[index]];
  } else if (length % 2 === 0) {
    let index = length / 2; // index of the second middle element
    return [middleOf[index - 1], middleOf[index]];
  }
};

//Test Case:
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']), ['d', 'e']);