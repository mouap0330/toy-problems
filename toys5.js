/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample.

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

*/

let array = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ],
    [
        ['firstName', 'Bob'], ['lastName', 'Heck'], ['age', 1], ['role', 'Customer']
    ],
    [
        ['firstName', 'Cat'], ['lastName', 'Pat'], ['age', 2], ['role', 'Bat']
    ]
];



function transformEmployeeData(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let newObj = {};
    for (let j = 0; j < array[i].length; j++) {
      // console.log(array[i][j][1]);
      newObj[array[i][j][0]] = array[i][j][1];
    }
    newArray.push(newObj);
  }
return newArray;
};

// transformEmployeeData(array);
console.log(transformEmployeeData(array));
