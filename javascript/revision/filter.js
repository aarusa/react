// 1. Given an array of numbers, return only the even numbers.
const numbers = [1,2,3,4,5,6,7,8,9];
const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

// 2. Filter numbers greater than 10
const a = [5, 12, 8, 20, 3, 15];
const numGT10 = a.filter(num => num > 10);
console.log(numGT10);

// 3. Filter odd numbers
const b = [10, 11, 12, 13, 14, 15];
const oddNumbers = b.filter(num => num % 2 != 0);
console.log(oddNumbers);

// 4. Filter words with more than 5 characters
const words = ["cat", "elephant", "dog", "javascript", "book"];
const result = words.filter(word => word.length > 5);
console.log(result);

// 5. Filter vowels from an array
const letters = ["a", "b", "e", "f", "i", "o", "x", "u"];
const vowels = letters.filter(letter => "aeiou".includes(letter));
console.log(vowels);

// 6. Remove spaces from a sentence
const text = "hello world javascript";
const noSpaces = text
  .split("")
  .filter(letter => letter !== " ")
  .join("");

console.log(noSpaces);