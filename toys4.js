/*
Write a function called "listAllValues" which returns an array of all the input object's values.


E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1]

*/

let inputObj = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};


function listAllValues(obj) {
  let newArray = [];
  for (let val in obj)
    newArray.push(obj[val]);
    return newArray;
};
console.log(listAllValues(inputObj));
