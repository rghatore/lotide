// this function returns the middle values of an array
// input is an array. if array only has upto 2 elements, then there is no middle
// if the array has odd elements, then it return one middle. if even, then two middle elements
const middle = function(middleOf) {
  const length = middleOf.length;
  if (length <= 2) {
    return [];  // there is no middle for an array upto two elements
  } else if (length % 2 !== 0) {
    let index = Math.floor(length / 2); // index of the middle element
    return [middleOf[index]];
  } else if (length % 2 === 0) {
    let index = length / 2; // index of the second middle element
    return [middleOf[index - 1], middleOf[index]];
  }
};

module.exports = middle;