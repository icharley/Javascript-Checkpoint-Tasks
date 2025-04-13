function capitalizeWords(sentence) {
  // to  first split the sentence into an array of words
  let words = sentence.split(" ");

  // to Loop through the words and capitalize the first letter of each
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  // Join the words back into a single sentence
  return words.join(" ");
}

// Example
console.log(capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"
