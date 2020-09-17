// Function to check assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (actual !== expected) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
  }
};

// this function scans the object and returns the first key which has a truthy value
// input is an object and a callback function
const findKey = (bagOfItems, callback) => {
  // iterate over object key-value pairs
  for (const [key, value] of Object.entries(bagOfItems)) {
    // run the condition on values
    if (callback(value)) {
      // return the key where condition(value) is true
      return key;
    }
  }
};

// Test Case:
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma" || "Ora");

assertEqual(findKey({
  "A": 5,
  "B": 3,
  "C": 2,
  "D": 3
}, x => x < 5), "B" || "C" || "D");

assertEqual(findKey({
  "A": 5,
  "B": 3,
  "C": 2,
  "D": 3
}, x => x > 5), undefined);

assertEqual(findKey({}, x => x + 5), undefined);