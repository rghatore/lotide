//Function receives two arguments as parameters; source and itemsToRemove arrays.
//it removes the elements from the source array which exist in the the itemsToRemove array.
//Does not modify the original array

const without = (source, itemsToRemove) => {
  const newArray = [...source]; //stays empty if the source is empty
  //refactor this later
  for (let j = 0; j < itemsToRemove.length; j++) { //...each element of itemsToRemove array
    for (let i = 0; i < newArray.length; i++) { //checks each element of source array against ...
      if (newArray[i] === itemsToRemove[j]) { //compares the elements from two arrays
        let index = newArray.indexOf(source[i]);
        newArray.splice(i, 1); //removes the elements which match
      }
    }
  }
  return newArray; //returns the new array without modifying the original
};

module.exports = without;