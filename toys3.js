/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

*/

let arrayOfArrays = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(array) {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    let first = array[i]; // array elements
    object[first[0]] = first[1];
  }
  return object;
};
// fromListToObject(arrayOfArrays);
console.log(fromListToObject(arrayOfArrays));
