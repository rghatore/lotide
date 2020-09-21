// this function counts the number of times a particular letter appears in a string
// does not show letters which do not exist in the input string
// letters: input string
const countLetters = function(letters) {
  const results = {};

  for (const item of letters) {
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

module.exports = countLetters;