function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([])); // Output: 0
console.log(sumArray([10, -5, 7])); // Output: 12
