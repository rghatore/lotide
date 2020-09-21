const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

// Test Case:
const word = "lighthouse labs";
const result1 = countLetters(word);
console.log(result1);

assertEqual(result1["l"], 2);         // checking for correct item and count
assertEqual(result1["z"], undefined); // checking for item which does not exist
assertEqual(result1["e"], 1);         // checking for a correct item which is not the first
assertEqual(result1[" "], undefined); // checking that spaces are not counted