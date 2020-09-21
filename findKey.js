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

module.exports = findKey;