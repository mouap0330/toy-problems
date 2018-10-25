/*
Write a function called "getAllKeys" which returns an array of all the input object's keys.
*/

let object = {
  name : 'Sam',
  age: 25,
  hasPets: true
};

function getAllKeys(obj){
  let newArray = [];
  // for 'property' in 'object'
  for (let vals in obj) {
    newArray.push(vals);
    ////get the values instead 
    // newArray.push(obj[vals]);
  }
  return newArray;
};
console.log(getAllKeys(object));
