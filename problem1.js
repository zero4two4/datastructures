
//create 2 arrays 
// create a function  named distinctSum to find all the distinct numbers in both arrays
//create a new array (array3) to store all the distinct value
//using a for loop iterate through every value in array1 and check if that value is in array2
//if that value from array1 is NOT in array2 store that value in array3
//repeat steps 4&5 check to check for every value of array2 in array 1
//using a for loop iterate through every value in array2 and check if that value is in array1
//if that value from array2 is NOT in array1 store that value in array3
//find the sum of all elements in the array3 and store the result in the variable sum
//format the result and print to console

const array1 = [3, 1, 7, 9];
const array2 = [2, 4, 1, 9, 3];

function distinctSum(array1, array2) {
  const array3 = [];

  for (let i of array1) {
    if (!array2.includes(i)) {
      array3.push(i);
    }
  }

  for (let i of array2) {
    if (!array1.includes(i)) {
      array3.push(i);
    }
  }

  let sum = 0;
  for (let x of array3) {
    sum += x;
  }

  let distinct = [...array3];
  return `${sum} (distinct elements: ${distinct})`;
}

distinctSum(array1, array2);