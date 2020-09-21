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

module.exports = findKeyByValue;