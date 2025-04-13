function generateFibonacci(n) {
  if (n <= 0) return []; //  any number less than or equal to 0 is not valid for generating the Fibonacci sequence
  if (n === 1) return [0]; // if n is 1, it returns an array with just the first number of the Fibonacci sequence: [0].
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]); // to add the previous two numbers to get the next number.
  }
  return fib;
}

// Example usage:
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
