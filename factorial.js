//  function to calculate the factorial of a given number

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    //to multiply all the integers from 1 up to the number.
    result *= i; //this multiplies the result by each number.
  }

  return result;
}

// Use case
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(0)); // 1
console.log(factorial(6)); // 720
console.log(factorial(1)); // 1
