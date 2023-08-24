// !DATA TYPES
// 💻 Day 2: Exercises
// Exercise: Level 1
// ?QUESTION 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = "30 Days Of JavaScript";

// ?QUESTION 2. Print the string on the browser console using console.log()
console.log(challenge);

// ?QUESTION 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// ?QUESTION 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// ?QUESTION 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// ?QUESTION 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0, 1));

// ?QUESTION 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring("Days Of JavaScript"));

// ?QUESTION 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// ?QUESTION 9. Split the string into an array using split() method
newArr = challenge.split("");

// ?QUESTION 10. Split the string 30 Days Of JavaScript at the space using split() method

// ?QUESTION 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const newCompanies = companies.split(",");
console.log(newCompanies);

// ?QUESTION 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

// ?QUESTION 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// ?QUESTION 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const textOne = "30 Days Of JavaScript";
const charCodeOfJ = textOne.charCodeAt(3);
console.log("Character code of J:", charCodeOfJ);

// ?QUESTION 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const textTwo = "30 Days Of JavaScript";
const positionOfA = textTwo.indexOf("a");
console.log('Position of the first occurrence of "a":', positionOfA);

// ?QUESTION 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const lastPositionOfA = textTwo.lastIndexOf("a");
console.log('Position of the last occurrence of "a":', lastPositionOfA);

// ?QUESTION 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentenceOne =
  "You cannot end a sentence with because because because is a conjunction";
const firstPositionOfBecause = sentenceOne.indexOf("because");
console.log(
  'Position of the first occurrence of "because":',
  firstPositionOfBecause
);

// ?QUESTION 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceOne.lastIndexOf("because"));
// Use the lastIndexOf() method to find the position of the last occurrence of "because"
const lastPositionOfBecause = sentenceOne.lastIndexOf("because");
console.log(
  'Position of the last occurrence of "because":',
  lastPositionOfBecause
);

// ?QUESTION 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const position = sentenceOne.search(/\bbecause\b/);
console.log('Position of the first occurrence of "because":', position);

// ?QUESTION 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const sentenceTwo = " 30 Days Of JavaScript ";
const sentenceTwoWithoutSpaces = sentenceTwo.trim();
console.log(sentenceTwo.length);
console.log(sentenceTwoWithoutSpaces.length);

// ?QUESTION 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));
const textThree = "30 Days Of JavaScript";
const startingString = "30 Days";
const resultOfQuestion21 = textThree.startsWith(startingString);
console.log(resultOfQuestion21);

// ?QUESTION 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const lastString = "JavaScript";
const resultOfQuestion22 = textThree.endsWith(lastString);
console.log(resultOfQuestion22);

// ?QUESTION 23. Use match() method to find all the a’s in 30 Days Of JavaScript
const allLetterA = textThree.match("a");
console.log(allLetterA);

// Use the match() method with a regular expression to find all occurrences of "a" (both lowercase and uppercase)
const matches = text.match(/a/gi);
console.log(matches);

// ?QUESTION 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const partOne = "30 Days of";
const partTwo = "JavaScript";
const bothMerged = partOne.concat(partTwo);
console.log(bothMerged);

// ?QUESTION 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));
const teixt = "30 Days Of JavaScript";
// Print the string two times using the repeat() method
const repeatedText = text.repeat(2);
console.log(repeatedText);

// Exercise: Level 2
/* ?QUESTION 26. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */
console.log(
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

/* ?QUESTION 27. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

// ?QUESTION 28. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const value = "10";
// Check if the type of '10' is exactly equal to the number 10
if (typeof value === "number") {
  console.log("The value is already a number:", value);
} else {
  // Convert the string to a number using parseInt or parseFloat
  const parsedValue = parseInt(value); // Use parseFloat(value) if you expect a floating-point number
  console.log("The value converted to a number:", parsedValue);
}

// ?QUESTION 29. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const tolerance = 0.0001; // Define the tolerance level
// Parse the string '9.8' to a floating-point number
let parsedNumber = parseFloat("9.8");
// Check if the parsed number is within the tolerance range of 10
if (Math.abs(parsedNumber - 10) < tolerance) {
  // If the parsed number is within the tolerance range, set it to 10
  parsedNumber = 10;
}
console.log(parsedNumber);

// ?QUESTION 30. Check if 'on' is found in both python and jargon
const word1 = "python";
const word2 = "jargon";
const isOnFoundInWord1 = word1.includes("on");
const isOnFoundInWord2 = word2.includes("on");
console.log(`'on' is found in 'python': ${isOnFoundInWord1}`);
console.log(`'on' is found in 'jargon': ${isOnFoundInWord2}`);
