/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string.

Notes:
* If given an empty string, it should return an empty object.
*/

function countWords(str) {
  var obj = {};
  var newStr = str.split(' ');

  if (str === '') {
    return {};
  }
  for (var i = 0; i < newStr.length; i++) {
    if(newStr[i] in obj) {
      obj[newStr[i]]++;
    } else {
      obj[newStr[i]] = 1;
    }
  }
  return obj;
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
