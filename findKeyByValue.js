// Function to check assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢`);
  } else if (actual !== expected) {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected} 🔴🔴`);
  }
};
// this function finds the first key associated with value.
// returns undefined if key not found
// bagOfItems: object with key: value pairs to look through
// valueOfItem: value to search for in the object
const findKeyByValue = function(bagOfItems, valueOfItem) {
  // have to loop through the object
  for (const item in bagOfItems) {
    if (Object.prototype.hasOwnProperty.call(bagOfItems, item)) {
      if (bagOfItems[item] === valueOfItem) {
        return item;
      }
    }
  }
};

// Test Case:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const goatsOfSports = {
  soccer: 'Cristiano Ronaldo',
  cricket: 'Sachin Tendulkar',
  formulaOne: 'Michael Schumacher',
  tennis: 'Roger Federer',
  goatOfGoats: 'Michael Schumacher',
  lol: 'me'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(goatsOfSports, "Michael Schumacher"), 'formulaOne');
assertEqual(findKeyByValue(goatsOfSports, "me"), 'lol');
assertEqual(findKeyByValue(goatsOfSports, 'you'), undefined);