function stringCounter(str) {
  if (typeof str === "string") {
    return str.length;
  } else if (str.length === "0") {
    return "string is empty";
  } else {
    return "not a string";
  }
}

let nickname = "johhny";
console.log(stringCounter(nickname)); // Output: 6
console.log(stringCounter("")); // Output: string is empty
console.log(stringCounter(123)); // Output: Not a string
