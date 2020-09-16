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

//Function receives two arguments as parameters; source and itemsToRemove arrays.
//it removes the elements from the source array which exist in the the itemsToRemove array.
//Does not modify the original array

const without = (source, itemsToRemove) => {
  const newArray = []; //stays empty if the source is empty
  //refactor this later
  if (itemsToRemove.length === 0) {
    return source;
  }
  for (let i = 0; i < source.length; i++) { //checks each element of source array against ...
    /* KEEP THE FOLLOWING LINE FOR LEARNING
    * If the itemsToRemove is [], then this does not run and an empty array is returned
    *  for (let j = 0; j < itemsToRemove.length; j++) { //...each element of itemsToRemove array
      */     
     for (let j = 0; j < itemsToRemove.length; j++) { //...each element of itemsToRemove array
      if (source[i] !== itemsToRemove[j]) { //compares the elements from two arrays
        newArray.push(source[i]); //adds to the new array if the elements don't match
        console.log(i); //debugging
        console.log(j); //debugging
        console.log(newArray); //debugging
      }
    }
  }
  return newArray; //returns the new array without modifying the original
};

//Test Case: check original stays the same
const words = ["hello", "world", "lighthouse"];
without(words, ["Lighthouse"]);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

// Test Case: check with random arrays
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['loopy', 'lighthouse'], []), ['loopy', 'lighthouse']);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([], [1, 2]), []);
assertArraysEqual(without([1, 1, 1, 2, 3, 4], [1, 1, 3]), [2, 4]); //this caused error
without([1, 1, 1, 2, 3, 4], [1, 1, 3]); //debugging