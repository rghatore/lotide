//Function to compare arrays
//Check for blank arrays
//Compare length and elements
const eqArrays = function(first, second) {
  // check to see if they inputs are indeed arrays because [a, b, c] and string 'abc'
  // turn out to be equal otherwise!
  if (Array.isArray(first) && Array.isArray(second) && first.length === second.length) {
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

module.exports = eqArrays;