/*
let greeting = "hello";
let reverse = greeting.split("").reverse().join("");
console.log(reverse);
*/

// my first approach

function reversse(str) {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  } else {
    return "input is not a string";
  }
}

console.log(reversse("hello")); // "olleh"
console.log(reversse(123)); // "Input is not a string."

// my second approach

function reverse(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add current character to the result
  }

  return reversed;
}

console.log(reverse("hello")); // "olleh"
console.log(reverse("aspaya")); // "ayapsa"
