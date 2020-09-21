// this function counts the number of times a particular letter appears in a string
// does not show letters which do not exist in the input string
// letters: input string
const letterPositions = function(letters) {
  const results = {};
  let index = 0;

  for (const item of letters) {
    if (item !== ' ')  {
      if (results[item]) {
        results[item].push(index);
      } else {
        results[item] = [index];
      }
    }
    index++;
  }
  return results;
};

module.exports = letterPositions;