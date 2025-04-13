//a function to check if a number is prime or not.

/*

A prime number is a number greater than 1 that has no divisors other than 1 and itself.

So, I checked:

- the number if it is less than or equal to 1 → not prime.

- Loop from 2 up to num - 1 and check if anything divides it evenly.

*/

function primeChecker(num) {
  if (num <= 1) {
    return `${num} is not a prime number`;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is a prime number`;
}

//use case

console.log(primeChecker(2)); // prime
console.log(primeChecker(4)); // not prime
console.log(primeChecker(7)); // prime
console.log(primeChecker(45)); // not prime
