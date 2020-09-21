// this function copies elements from an array until it reaches the callback return a truthy value
const takeUntil = (array, callback) => {
  const result = [];
  for (let item of array) {
    // check for the stopping condition
    // console.log(callback(item)); // debugging
    if (callback(item)) {
      // return resulting array
      return result;
    }
    // copy elements of the array starting from the first
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;