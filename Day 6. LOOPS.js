// !Loops
// !💻 Exercises:Day 6
// !Exercises: Level 1
const countries2 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack2 = ["MongoDB", "Express", "React", "Node"];

//// ?QUESTION 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let z = 0;
while (z <= 10) {
  console.log(z);
  z++;
}
let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 10);

// ?QUESTION 2.Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
z = 10;
do {
  console.log(z);
  z--;
} while (z >= 0);

// ?QUESTION 3.Iterate 0 to n using for loop
const n = 20;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// ?QUESTION 4.Write a loop that makes the following pattern using console.log():

/* #
      ##
      ###
      ####
      #####
      ######
      #######
   */
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

// ?QUESTION 5.Use loop to print the following pattern:
/* 
  0 x 0 = 0
  1 x 1 = 1
  2 x 2 = 4
  3 x 3 = 9
  4 x 4 = 16
  5 x 5 = 25
  6 x 6 = 36
  7 x 7 = 49
  8 x 8 = 64
  9 x 9 = 81
  10 x 10 = 100
   */

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} =${i * i}`);
}

// ?QUESTION 6.Using loop print the following pattern

/* i    i^2   i^3
   0    0     0
   1    1     1
   2    4     8
   3    9     27
   4    16    64
   5    25    125
   6    36    216
   7    49    343
   8    64    512
   9    81    729
   10   100   1000 */
// ?QUESTION 7.Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// ?QUESTION 8.Use for loop to iterate from 0 to 100 and print only odd numbers
let oddNum = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// ?QUESTION 9.Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// ?QUESTION 10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (i = 0; i <= 100; i++) {
  console.log(i);
  sum = sum + i;
  console.log(sum);
}
console.log(sum);
// ?QUESTION 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumOfEven = 0;
let sumOfOdd = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sumOfEven = sumOfEven + i;
  } else {
    console.log(i);
    sumOfOdd = sumOfOdd + i;
  }
}
console.log(sumOfEven);
console.log(sumOfOdd);

// ?QUESTION 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array.[2550, 2500]

// ?QUESTION 13.Develop a small script which generate array of 5 random numbers
const randomNumbers = [];
for (i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 100);
  randomNumbers.push(randomNum);
}
console.log(randomNumbers);
// ?QUESTION 14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueRandomNumber = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  if (!uniqueRandomNumber.includes(randomNumber)) {
    uniqueRandomNumber.push(randomNumber);
  }
}
console.log(uniqueRandomNumber);
// ?QUESTION 15.Develop a small script which generate a six characters random id:5j2khz
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const idLength = 6;
randomId = "";
for (let i = 0; i < idLength; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId = randomId + characters[randomIndex];
  randomCharacters = `random id:${randomId}`;
}
console.log(randomId);
console.log(randomCharacters);

// !Exercises: Level 2

// ?QUESTION 16.Develop a small script which generate any number of characters random id:fe3jo1gl124g xkqci4utda1lmbelpkm03rba
function generateRandomId(length) {
  const newCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let newRandomId = "";
  for (i = 0; i < length; i++) {
    const newRandomIndex = Math.floor(Math.random() * newCharacters.length);
    newRandomId = newRandomId + newCharacters[newRandomIndex];
  }
  return newRandomId;
}
console.log(generateRandomId(21));
// ?QUESTION 17.Write a script which generates a random hexadecimal number. '#ee33df'
function generatehexadecimalNumber() {
  const updatedCharacters = "0123456789ABCDEF";
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    const updatedRandomIndex = Math.floor(
      Math.random() * updatedCharacters.length
    );
    hexColor = hexColor + updatedCharacters[updatedRandomIndex];
  }
  return hexColor;
}
console.log(generatehexadecimalNumber());

// ?QUESTION 18.Write a script which generates a random rgb color number. rgb(240,180,80)
function generateRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(generateRGB());

// ?QUESTION 19.Using the above countries array, create the following new array. ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const capitalizedCountriesArray = [];
for (i = 0; i < countries2.length; i++) {
  capitalizedCountriesArray.push(countries2[i].toUpperCase());
}
console.log(capitalizedCountriesArray);

// ?QUESTION 20.Using the above countries array, create an array for countries length'. [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLength = [];
for (i = 0; i < countries2.length; i++) {
  const countryLength = countries2[i].length;
  countriesLength.push(countryLength);
}
console.log(countriesLength);

// ?QUESTION 21.Use the countries array to create the following array of arrays:

/* [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ] */

const countriesArrays = [];
const individualCountryArray = [];
for (i = 0; i < countries2.length; i++) {
  const country = countries2[i];
  const abbr = countries2[i].slice(0, 3).toUpperCase();
  const countryLength = country.length;
  individualCountryArray.push(country, abbr, countryLength);
}
countriesArrays.push(individualCountryArray);
console.log(individualCountryArray);
console.log(countriesArrays);
// ?QUESTION 22.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land' ['Finland','Ireland', 'Iceland']
const countriesWithLandd = countries2.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(countriesWithLandd);
if (countriesWithLandd.length > 0) {
  console.log(countriesWithLandd);
} else {
  console.log("All these countries are without land");
}

// ?QUESTION 23.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'. ['Albania', 'Bolivia','Ethiopia']
const countriesEndWithIa = countries2.filter((country) =>
  country.endsWith("ia")
);
console.log(countriesEndWithIa);
if (countriesEndWithIa.length > 0) {
  console.log(countriesEndWithIa);
} else {
  console.log("These are countries ends without ia");
}
// ?QUESTION 24.Using the above countries array, find the country containing the biggest number of characters. Ethiopia
const countryWithMostCharacters = countries2.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");
console.log(countryWithMostCharacters);

// ?QUESTION 25.Using the above countries array, find the country containing only 5 characters. ['Japan', 'Kenya']
const countryWithOnlyFiveCharacters = countries2.filter(
  (country) => country.length === 5
);
console.log(countryWithOnlyFiveCharacters);
// ?QUESTION 26.Find the longest word in the webTechs2 array
let longestWord = webTechs2[0];
console.log(longestWord);
for (i = 1; i < webTechs2.length; i++) {
  if (webTechs2[i].length > longestWord.length) {
    {
      longestWord = webTechs2[i];
    }
  }
}
console.log(longestWord);

// ?QUESTION 27.Use the webTechs array to create the following array of arrays: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const arrayOfArrays = [];
for (web of webTechs2) {
  const individualArray = [web, web.length];
  arrayOfArrays.push(individualArray);
}
console.log(arrayOfArrays);
// ?QUESTION 28.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = "";
for (i = 0; i < mernStack2.length; i++) {
  acronym = acronym + mernStack2[i][0];
}
console.log(acronym);
// ?QUESTION 29.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const technologies = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let i = 0; i < technologies.length; i++) {
  console.log(technologies[i]);
}
for (const tech of technologies) {
  console.log(tech);
}
// ?QUESTION 30.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

for (i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
  reversedFruit.push(fruits[i]);
}
console.log(reversedFruit);
// ?QUESTION 31.Print all the elements of array as shown below.

/* const fullStack = [
      ['HTML', 'CSS', 'JS', 'React'],
      ['Node', 'Express', 'MongoDB']
    ]
    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB */

for (let i = 0; fullStack.length; i++) {
  for (let y = 0; y < fullStack[i].length; y++) {
    console.log(fullStack[i][y].toUpperCase());
  }
}

// !Exercises: Level 3

// ?QUESTION 32.Copy countries array(Avoid mutation)
const copyCountries = [...countries2];
console.log(countries2);
// ?QUESTION 33.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countriesCopy = [...countries2];
const sortedCountries = countriesCopy.sort();
console.log("Sorted array:", sortedCountries);
// ?QUESTION 34.Sort the webTechs array and mernStack array
const webTechsCopy = [...webTechs2];
const sortedWebTechs = webTechsCopy.sort();
console.log(sortedWebTechs);

const mernStackCopy = [...mernStack2];
const sortedMernStack = mernStackCopy.sort();
console.log(sortedMernStack);
// ?QUESTION 35.Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesWithLand = [];
for (const country of countries2) {
  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}
console.log(countriesWithLand);
// ?QUESTION 36.Find the country containing the hightest number of characters in the countries array

let longestCharacterCountry = countries2[0];
for (let i = 1; i < countries2.length; i++) {
  if (countries2[i].length > longestCharacterCountry.length) {
    longestCharacterCountry = countries2[i];
  }
}
console.log(longestCharacterCountry);
// ?QUESTION 37.Extract all the countries containing only four characters from the countries array and print it as array
const countriesWithOnlyFourCharacters = [];
for (country of countries2) {
  if (country.length === 4) {
    countriesWithOnlyFourCharacters.push(country);
  }
}
console.log(countriesWithOnlyFourCharacters);
// ?QUESTION 38.Extract all the countries containing two or more words from the countries array and print it as array
const countriesWithTwoOrMoreWords = [];
for (country of countries2) {
  if (country.split(" ").length > 1) {
    countriesWithTwoOrMoreWords.push(country);
  }
}
console.log(countriesWithTwoOrMoreWords);

// ?QUESTION 39.Reverse the countries array and capitalize each country and stored it as an array
const copyOfCountries = [...countries2];
const reversedCountries = copyOfCountries.reverse();
console.log(reversedCountries);
