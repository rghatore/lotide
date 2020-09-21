const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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