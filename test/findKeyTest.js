const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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