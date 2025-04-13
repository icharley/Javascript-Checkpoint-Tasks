// A function that calculates the sum of all elements in an array
function sumArray(arr) {
  let sum = 0; // variable to hold the running total.

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //adds each element to the total.
  }

  return sum;
}

// use case
const cash = [12, 13, 14];
console.log(sumArray(cash)); // Output: 39
