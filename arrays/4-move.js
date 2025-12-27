const numbers = [1, 2, 3, 4]; // array of numbers

const output = move(numbers, 1, 3); // move the element at index 1 to index 3

console.log(output); // output the new array

function move(array, index, offset) { // move the element at index to the new position    
  const position = index + offset; // calculate the new position
  if (position >= array.length || position < 0) { // if the new position is out of bounds, throw an error
    console.error('Invalid offset.');
    return;
  }
  const output = [...array]; // create a new array with the same elements
  const element = output.splice(index, 1)[0]; // remove the element at the index
  output.splice(position, 0, element); // insert the element at the new position
  return output; // return the new array
}