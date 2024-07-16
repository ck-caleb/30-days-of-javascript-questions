// Exercises
// Exercises: Level 1
// ?QUESTION 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.Enter your age: 30.You are old enough to drive.Enter your age:15.You are left with 3 years to drive.
let driverApplicantAge = parseInt(prompt("Enter your age : "));
if (driverApplicantAge >= 18) {
  console.log("You are old enough to drive");
} else {
  const yearsToWait = 18 - driverApplicantAge;
  console.log(`you are left with ${yearsToWait} to drive`);
}

// ?QUESTION 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.Enter your age: 30.You are 5 years older than me.
const myAge1 = 25;
const yourAge1 = parseInt(prompt("Enter your age: "));
const ageDifference1 = Math.abs(yourAge1 - myAge1);
if (yourAge1 > myAge1) {
  console.log(`You are ${ageDifference1} older than me`);
} else {
  console.log(`You are ${ageDifference1} younger than me`);
}

// ?QUESTION 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways. using if else.   ternary operator. let a = 4. let b = 3. 4 is greater than 3
a = 4;
b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
//ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

// ?QUESTION 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?.Enter a number: 2. 2 is an even number.Enter a number: 9. 9 is is an odd number.
const numberToCheck = parseInt(prompt("Enter a number: "));
if (numberToCheck % 2 === 0) {
  console.log(`${numberToCheck} is an even number`);
} else {
  console.log(`${numberToCheck} is an odd number`);
}

// Exercises: Level 2
// ?QUESTION 5. Write a code which can give grades to students according to theirs scores: 80-100, A. 70-79, B. 60-69, C. 50-59, D. 0-49, F
let studentScore = 85;
if (studentScore >= 80 && studentScore <= 100) {
  console.log("A");
} else if (studentScore >= 70 && studentScore <= 79) {
  console.log("B");
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log("C");
} else if (studentScore >= 50 && studentScore <= 59) {
  console.log("D");
} else if (studentScore >= 0 && studentScore <= 49) {
  console.log("F");
} else {
  console.log("student score is incorrect");
}
// ?QUESTION 6. Check if the season is Autumn, Winter, Spring or Summer. If the user input is : September, October or November, the season is Autumn. December, January or February, the season is Winter. March, April or May, the season is Spring. June, July or August, the season is Summer
let month = prompt(" Enter month: ");
const monthToCheck = month.toLowerCase();
const autumn = ["september", "october", "november"];
const winter = ["december", "january", "february"];
const spring = ["march", "april", "may"];
const summer = ["june", "july", "august"];
if (autumn.includes(monthToCheck)) {
  console.log("the season is autumn");
} else if (winter.includes(monthToCheck)) {
  console.log("the season is winter");
} else if (spring.includes(monthToCheck)) {
  console.log("the season is spring");
} else if (summer.includes(monthToCheck)) {
  console.log("the season is summer");
} else {
  console.log("incorrect entry");
}

// ?QUESTION 7. Check if a day is weekend day or a working day. Your script will take day as an input. What is the day  today? Saturday.Saturday is a weekend. What is the day today? saturDaY. Saturday is a weekend. What is the day today? Friday. Friday is a working day. What is the day today? FrIDAy. Friday is a working day.
let day = prompt("What is the day today? : ");
const dayEntered = day.toLowerCase();
const workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const weekendDays = ["saturday", "sunday"];
if (workingDays.includes(dayEntered)) {
  console.log(`${dayEntered} is a working day`);
} else if (weekendDays.includes(dayEntered)) {
  console.log(`${dayEntered} is a weekend`);
}

// Exercises: Level 3
// ?QUESTION 8. Write a program which tells the number of days in a month. Enter a month: January. January has 31 days. Enter a month: JANUARY. January has 31 day. Enter a month: February. February has 28 days. Enter a month: FEbruary. February has 28 days.

let monthEntry = prompt("Enter a month: ");
const monthEntryLowerCase = month.toLowerCase();
if (
  monthEntryLowerCase === "january" ||
  monthEntryLowerCase === "march" ||
  monthEntryLowerCase === "may" ||
  monthEntryLowerCase === "july" ||
  monthEntryLowerCase === "august" ||
  monthEntryLowerCase === "october" ||
  monthEntryLowerCase === "december"
) {
  console.log(`${month} has 31 days.`);
} else if (
  monthEntryLowerCase === "april" ||
  monthEntryLowerCase === "june" ||
  monthEntryLowerCase === "september" ||
  monthEntryLowerCase === "november"
) {
  console.log(`${month} has 30 days.`);
} else if (monthEntryLowerCase === "february") {
  console.log(`${month} has 28 days.`);
} else {
  console.log("Invalid input. Please enter a valid month.");
}

// ?QUESTION 9. Write a program which tells the number of days in a month, now consider leap year.
let monthEntered = prompt("enter current month :");
const monthEnteredLowerCase = monthEntered.toLowerCase();
const yearEntry = parseInt(prompt("enter the year : "));
function isLeapYear(yearEntry) {
  return yearEntry % 4 === 0 && yearEntry % 100 !== 0 && yearEntry % 400 === 0;
}
if (
  monthEnteredLowerCase === "january" ||
  monthEnteredLowerCase === "march" ||
  monthEnteredLowerCase === "may" ||
  monthEnteredLowerCase === "july" ||
  monthEnteredLowerCase === "august" ||
  monthEnteredLowerCase === "october" ||
  monthEnteredLowerCase === "december"
) {
  console.log(`${month} has 31 days.`);
} else if (
  monthEnteredLowerCase === "april" ||
  monthEnteredLowerCase === "june" ||
  monthEnteredLowerCase === "september" ||
  monthEnteredLowerCase === "november"
) {
  console.log(`${month} has 30 days.`);
} else if (monthEnteredLowerCase === "february") {
  if (isLeapYear(yearEntry)) {
    console.log(`${monthEnteredLowerCase} has 29 days`);
  } else {
    console.log(`${monthEnteredLowerCase} has 28 days`);
  }
} else {
  console.log("invalid month. Enter a valid month name");
}
