function sumOfCubes(nums) {
  let sumOfCubes = 0;

  for (i = 0; i < nums.length; i++) {
    sumOfCubes += nums[i] ** 3; // This allows the code to add each element in the array
  }

  return sumOfCubes;
}

console.log(sumOfCubes([1, 5, 9])); // ➞ 855
console.log(sumOfCubes([3, 4, 5])); // ➞ 216
console.log(sumOfCubes([2])); // ➞ 8
console.log(sumOfCubes([])); // ➞ 0 since it is an empty array.
