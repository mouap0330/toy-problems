/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

*/

function removeStringValuesLongerThan(num, obj) {
  for (var x in obj) {
    if (obj[x].length > num) {
      delete obj[x];
    }
  }

}
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
