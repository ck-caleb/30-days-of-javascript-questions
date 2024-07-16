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
