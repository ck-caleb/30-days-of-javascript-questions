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
const isOnFoundIhnWord2 = word2.includes("on");
console.log(`'on' is found in 'python': ${isOnFoundInWord1}`);
console.log(`'on' is found in 'jargon': ${isOnFoundInWord2}`);

// ?QUESTION 31. I hope this course is not full of jargon. Check if jargon is in the sentence.
const jargonSentence = "I hope this course is not full of jargon";
isJargonFound = jargonSentence.includes("jargon");
console.log(`'jargon' is found in the sentence: ${isJargonFound}`);

// !?QUESTION 32. Generate a random number between 0 and 100 inclusively.
function getRandomNumber() {
  //get random number
  const randomNumber = Math.random();
  //get integer
  const randomInteger = Math.floor(randomNumber * 101);
  return randomInteger;
}
const getRandomNumberBetweenZeroAndHundred = getRandomNumber();
console.log(getRandomNumberBetweenZeroAndHundred);

// ?QUESTION 33. Generate a random number between 50 and 100 inclusively.
function getRandomNumberTwo(max, min) {
  //generate random number
  const secondRandomNumber = Math.random();
  // generate integer
  const secondRandomInteger = Math.floor(
    secondRandomNumber * (max - min + 1) + min
  );
  //output
  return secondRandomInteger;
}
const getRandomNumberBetweenFiftyAndHundred = getRandomNumberTwo(50, 100);
console.log(getRandomNumberBetweenFiftyAndHundred);

// ?QUESTION 34. Generate a random number between 0 and 255 inclusively.
function getRandomNumberThree() {
  //get random number
  const thirdRandomNumber = Math.random();
  //get integer
  const thirdRandomInteger = Math.floor(thirdRandomNumber * 250);
  return thirdRandomInteger;
}
const getRandomNumberBetweenZeroAndTwoHundredAndFifty = getRandomNumberThree();
console.log(getRandomNumberBetweenZeroAndTwoHundredAndFifty);

// ?QUESTION 35. Access the 'JavaScript' string characters using a random number.
const wordToCheck = "JavaScript";
// Generate a random index between 0 and word length
const randomIndex = Math.floor(Math.random() * wordToCheck.length);
const randomCharacter = wordToCheck.charAt(wordToCheck);
console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);

/* 
?QUESTION 36. Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

// ?QUESTION 37. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentenceThree =
  "You cannot end a sentence with because because because is a conjunction";
const startIndex = sentenceThree.indexOf("because");
const lastIndex = sentenceThree.lastIndexOf("because");
const slicedPhrase = sentenceThree.substr(
  startIndex,
  lastIndex + 7 - startIndex
);
console.log(slicedPhrase);

// Exercises: Level 3
// ?QUESTION 38. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// ?QUESTION 39. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

/*
?QUESTION 40. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' */

// ?QUESTION 41. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// BOOLEAN, OPERATORS
// 💻 Day 3: Exercises
// ?QUESTION 42. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
firstName = "caleb";
lastName = "koech";
country = "kenya";
city = "kericho";
age = 25;
isMarried = false;
year = 2023;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// ?QUESTION 43. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
// ?QUESTION 44. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'

// ?QUESTION 45. Find the length of python and jargon and make a falsy comparison statement.

// ?QUESTION 46. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')

// ?QUESTION 47. Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?

// ?QUESTION 48. Find out the numbers of seconds elapsed from January 1, 1970 to now.
// Exercises: Level 2

// ?QUESTION 49. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// ?QUESTION 50. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).Enter side a: 5,Enter side b: 4,Enter side c: 3,The perimeter of the triangle is 12

// ?QUESTION 51. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// ?QUESTION 52. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// ?QUESTION 53. Calculate the slope, x-intercept and y-intercept of y = 2x -2.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10/Compare the slope of above two questions.

// ?QUESTION 54. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// ?QUESTION 55. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?.Enter hours: 40.Enter rate per hour: 28. Your weekly earning is 1120

// ?QUESTION 56. If the length of your name is greater than 7 say, your name is long else say your name is short.Compare your first name length and your family name length and you should get this output. let firstName = 'Asabeneh'.let lastName = 'Yetayeh'.Your first name, Asabeneh is longer than your family name, Yetayeh

// ?QUESTION 57. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.let myAge = 250.let yourAge = 25.I am 225 years older than you.

// ?QUESTION 58. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.Enter birth year: 1995.You are 25. You are old enough to drive.Enter birth year: 2005.You are 15. You will be allowed to drive after 3 years.

// ?QUESTION 59. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.Enter number of years you live: 100.You lived 3153600000 seconds.

// ?QUESTION 60. Create a human readable time format using the Date time object.YYYY-MM-DD HH:mm.DD-MM-YYYY HH:mm.DD/MM/YYYY HH:mm
// Exercises: Level 3
// ?QUESTION 61. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ).YYY-MM-DD HH:mm eg. 20120-01-02 07:05
