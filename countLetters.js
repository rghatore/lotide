// Function to check assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (actual !== expected) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
  }
};

// this function counts the number of times a particular letter appears in a string
// does not show letters which do not exist in the input string
// letters: input string
const countLetters = function(letters) {
  const results = {};

  for (const item of letters) {
    console.log('letter =', item);
    if (item !== ' ')  {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// Test Case:
const word = "lighthouse labs";
const result1 = countLetters(word);
console.log(result1);

assertEqual(result1["l"], 2);         // checking for correct item and count
assertEqual(result1["z"], undefined); // checking for item which does not exist
assertEqual(result1["e"], 1);         // checking for a correct item which is not the first
assertEqual(result1[" "], undefined); // checking that spaces are not counted