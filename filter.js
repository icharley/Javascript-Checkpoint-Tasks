// the function filters out age greater than or = to 16

let age = [13, 17, 24, 25, 18, 12];

let filteredAge = age.filter((age) => age >= 16);

console.log(filteredAge);

// a function that filters out word in a sentence that begins with capital letter.

function filterCapitalWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Use filter to keep only words starting with a capital letter
  const capitalWords = words.filter((word) => {
    return word.charAt(0) === word.charAt(0).toUpperCase();
  });

  return capitalWords;
}

// Example usage:
const input = "This is My Example Sentence";
console.log(filterCapitalWords(input));
// Output: [ 'This', 'My', 'Example', 'Sentence' ]
