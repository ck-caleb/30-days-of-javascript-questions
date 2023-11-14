// !DAY 5
// !ARRAYS
// !💻 Exercise
// !Exercise: Level 1
const countries = [
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// ?QUESTION 1.Declare an empty array;
const arr = [];
// ?QUESTION 2.Declare an array with more than 5 number of elements
const newArray = ["kenya", "tanzania", "canada", 4, "malawi"];

// ?QUESTION 3. Find the length of your array
const newArrayLength = newArray.length;
console.log(newArrayLength);

// ?QUESTION 4. Get the first item, the middle item and the last item of the array
const firstItem = newArray[0];
console.log(firstItem);
const middleItem = Math.floor(newArray.length / 2);
console.log(middleItem);
const lastItem = newArray[4];
console.log(lastItem);

// ?QUESTION 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [3, 5, "cats", "dogs", "fruits", "vegetables"];
const mixedDataTypesLength = mixedDataTypes.length;
console.log(mixedDataTypesLength);

// ?QUESTION 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// ?QUESTION 7.Print the array using console.log()
console.log(itCompanies);

// ?QUESTION 8.Print the number of companies in the array
const numberOfCompanies = itCompanies.length;
console.log(numberOfCompanies);

// ?QUESTION 9.Print the first company, middle and last company
const firstCompany = itCompanies[0];
console.log(firstCompany);
const middleCompany = Math.floor(itCompanies.length / 2);
console.log(middleCompany);
const lastCompany = itCompanies[6];
console.log(lastCompany);

// ?QUESTION 10.Print out each company
for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// ?QUESTION 11.Change each company name to uppercase one by one and print them out
for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}
// ?QUESTION 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const companiesAsSentence = `${itCompanies.join(", ")} are big IT companies  `;
console.log(companiesAsSentence);

// ?QUESTION 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyCheck = "Twitter";
if (itCompanies.includes(companyCheck)) {
  console.log(companyCheck);
} else {
  console.log(" company is not found");
}
// ?QUESTION 14.Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];
for (i = 0; i < itCompanies.length; i++) {
  const companyName = itCompanies[i];
  let oCount = 0;
  for (j = 0; j < companyName.length; j++) {
    if (companyName[j].toLowerCase() === "o") {
      oCount++;
    }
  }
  if (oCount > 1) {
    filteredCompanies.push(companyName);
  }
}
console.log(filteredCompanies);

// ?QUESTION 15.Sort the array using sort() method
const sortedItCompanies = [...itCompanies];
sortedItCompanies.sort();
console.log(sortedItCompanies);

// ?QUESTION 16.Reverse the array using reverse() method
const reversedItCompanies = itCompanies.reverse();
console.log(reversedItCompanies);

// ?QUESTION 17.Slice out the first 3 companies from the array
const slicingThreeCompanies = itCompanies.slice(0, 3);
console.log(slicingThreeCompanies);
console.log(itCompanies);

// ?QUESTION 18.Slice out the last 3 companies from the array
const slicingLastThreeCompanies = itCompanies.slice(4, 7);
console.log(slicingLastThreeCompanies);
console.log(itCompanies);

// ?QUESTION 19.Slice out the middle IT company or companies from the array
const slicingMiddleCompanies = itCompanies.splice(3, 1)[0];
console.log(slicingMiddleCompanies);
console.log(itCompanies);

// ?QUESTION 20.Remove the first IT company from the array
const removeFirstCompany = itCompanies.shift();
console.log(removeFirstCompany);
console.log(itCompanies);

// ?QUESTION 21.Remove the middle IT company or companies from the array
const removeMiddleCompanies = itCompanies.splice(3, 1)[0];
console.log(removeMiddleCompanies);
console.log(itCompanies);

// ?QUESTION 22.Remove the last IT company from the array
const removeLastCompany = itCompanies.pop();
console.log(removeLastCompany);
console.log(itCompanies);

// ?QUESTION 23.Remove all IT companies
const removeAllCompanies = itCompanies.splice(0, itCompanies.length);
console.log(removeAllCompanies);
console.log(itCompanies);

// Exercise: Level 2
// ?QUESTION 24.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// ?QUESTION 25.First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(words);
console.log(words.length)[
  ("I",
  "love",
  "teaching",
  "and",
  "empowering",
  "people",
  "I",
  "teach",
  "HTML",
  "CSS",
  "JS",
  "React",
  "Python")
];

13;
const words = text.replace(/[.,]/g, "").split(" ");
console.log(words);
// ?QUESTION 26.In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
const AllergicToHoney = true;
if (AllergicToHoney) {
  const indexOfHoney = shoppingCart.indexOf("Honey");
  if (indexOfHoney !== -1) {
    shoppingCart.splice(indexOfHoney, 1);
  }
}
console.log(shoppingCart);
// modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Grean Tea";
}
console.log(shoppingCart);

// ?QUESTION 27.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

// ?QUESTION 28.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// ?QUESTION 29.Concatenate the following two variables and store it in a fullStack variable.const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]; const backEnd = ["Node", "Express", "MongoDB"];console.log(fullStack)[("HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB")];
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// !Exercise: Level 3
// ?QUESTION 30.The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ?QUESTION 31.Sort the array and find the min and max age
const sortedAges = ages.sort();
console.log(sortedAges);
const minAge = sortedAges[0];
console.log(minAge);
const maxAge = sortedAges[sortedAges.length - 1];
console.log(maxAge);

// ?QUESTION 32.Find the median age(one middle item or two middle items divided by two)
const middle = Math.floor(sortedAges.length / 2);
let medianAge;
if (sortedAges % 2 === 0) {
  medianAge = (sortedAges[middle - 1] + sortedAges[middle]) / 2;
} else {
  medianAge = sortedAges[middle];
}
console.log(medianAge);

// ?QUESTION 33.Find the average age(all items divided by number of items)

const sumOfAges = sortedAges.reduce(
  (total, sortedAges) => total + sortedAges,
  0
);
console.log(sumOfAges);
const averageAge = sumOfAges / sortedAges.length;
console.log(averageAge);

// ?QUESTION 34.Find the range of the ages(max minus min)
const ageRange = maxAge - minAge;
console.log("Ages:", ages);
console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);
console.log("Age range:", ageRange);

// ?QUESTION 35.Compare the value of (min - average) and (max - average), use abs() method

// ?QUESTION 36.Slice the first ten countries from the countries array
const countriesCopy = [...countries];
const tenSlicedCompanies = countriesCopy.splice(0, 10);
console.log("First Ten Countries:", tenSlicedCompanies);

// ?QUESTION 37.Find the middle country(ies) in the countries array
const countriesMiddleIndex = Math.floor(countries.length / 2);
console.log(countriesMiddleIndex);
let middleCountries;
if (countries.length % 2 === 0) {
  middleCountries = [
    countries[countriesMiddleIndex - 1],
    countries[countriesMiddleIndex],
  ];
} else {
  middleCountries = [countries[countriesMiddleIndex]];
}
console.log(middleCountries);

// ?QUESTION 38.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const middleIndex = Math.floor(countries.length / 2);
console.log(middleIndex);
let firstHalf;
let secondHalf;
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, middleIndex);
  secondHalf = countries.slice(middleIndex);
} else {
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1);
}
console.log("Countries:", countries);
console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);

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
//// ?QUESTION 38. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let z = 0;
while (z < 10) {
  console.log(z);
  z++;
}
let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 10);

// ?QUESTION 39.Iterate 10 to 0 using for loop, do the same using while and do while loop
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
// ?QUESTION 40.Iterate 0 to n using for loop

// ?QUESTION 41.Write a loop that makes the following pattern using console.log():

/* #
    ##
    ###
    ####
    #####
    ######
    #######
 */

// ?QUESTION 42.Use loop to print the following pattern:
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

let num = 0;
for (i = 0; i <= 10; i++) {
  console.log(`${num} * ${num} =${num * num}`);
  num = num + 1;
}
// ?QUESTION 43.Using loop print the following pattern

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
// ?QUESTION 44.Use for loop to iterate from 0 to 100 and print only even numbers
let evenNum = 0;
for (i = 0; i < 100; i++) {
  if (evenNum % 2 === 0) {
    console.log(i);
  }
  evenNum += 1;
}
// ?QUESTION 45.Use for loop to iterate from 0 to 100 and print only odd numbers
let oddNum = 0;
for (z = 0; z <= 100; z++) {
  if (oddNum % 2 === 0) {
  } else {
    console.log(z);
  }
  oddNum += 1;
}
// ?QUESTION 46.Use for loop to iterate from 0 to 100 and print only prime numbers

// ?QUESTION 47.Use for loop to iterate from 0 to 100 and print the sum of all numbers.The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (i = 0; i <= 100; i++) {
  console.log(i);
  sum = sum + i;
  console.log(sum);
}
console.log(sum);
// ?QUESTION 49.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// ?QUESTION 50.The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// ?QUESTION 51.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array.[2550, 2500]

// ?QUESTION 52.Develop a small script which generate array of 5 random numbers

// ?QUESTION 53.Develop a small script which generate array of 5 random numbers and the numbers must be unique

// ?QUESTION 54.Develop a small script which generate a six characters random id:5j2khz

// !Exercises: Level 2

// ?QUESTION 55.Develop a small script which generate any number of characters random id:fe3jo1gl124g xkqci4utda1lmbelpkm03rba

// ?QUESTION 56.Write a script which generates a random hexadecimal number. '#ee33df'

// ?QUESTION 57.Write a script which generates a random rgb color number. rgb(240,180,80)

// ?QUESTION 58.Using the above countries array, create the following new array. ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// ?QUESTION 59.Using the above countries array, create an array for countries length'. [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// ?QUESTION 60.Use the countries array to create the following array of arrays:

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

// ?QUESTION 61.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land' ['Finland','Ireland', 'Iceland']

// ?QUESTION 62.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'. ['Albania', 'Bolivia','Ethiopia']

// ?QUESTION 63.Using the above countries array, find the country containing the biggest number of characters. Ethiopia

// ?QUESTION 64.Using the above countries array, find the country containing only 5 characters. ['Japan', 'Kenya']

// ?QUESTION 65.Find the longest word in the webTechs2 array

// ?QUESTION 66.Use the webTechs array to create the following array of arrays: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// ?QUESTION 67.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// ?QUESTION 68.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// ?QUESTION 69.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// ?QUESTION 70.Print all the elements of array as shown below.

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

// !Exercises: Level 3

// ?QUESTION 71.Copy countries array(Avoid mutation)
// ?QUESTION 72.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// ?QUESTION 73.Sort the webTechs array and mernStack array
// ?QUESTION 74.Extract all the countries contain the word 'land' from the countries array and print it as array
// ?QUESTION 75.Find the country containing the hightest number of characters in the countries array
// ?QUESTION 76.Extract all the countries contain the word 'land' from the countries array and print it as array
// ?QUESTION 77.Extract all the countries containing only four characters from the countries array and print it as array
// ?QUESTION 78.Extract all the countries containing two or more words from the countries array and print it as array
// ?QUESTION 79.Reverse the countries array and capitalize each country and stored it as an array
