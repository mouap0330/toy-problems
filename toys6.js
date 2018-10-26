/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/


let inputObj = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

function convertObjectToList(obj) {
  let newArray = [];
  for (let vals in obj) {
    newArray.push([vals, obj[vals]]);
  }
  return newArray;
};
console.log(convertObjectToList(inputObj));
// convertObjectToList(inputObj);
