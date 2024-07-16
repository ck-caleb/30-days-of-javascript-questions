// !BOOLEAN, OPERATORS AND DATES
// 💻 Day 3: Exercises
// ?QUESTION 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstNamee = "caleb";
const lastNamee = "koech";
const country = "kenya";
const city = "kericho";
const age = 25;
const isMarried = false;
const year = 2023;
console.log(typeof firstNamee);
console.log(typeof lastNamee);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// ?QUESTION 2. Boolean value is either true or false.Write three JavaScript statement which provide truthy value.Write three JavaScript statement which provide falsy value.
// statements that provide truthy value
const truthyStatementOne = "javascript is powerful";
console.log(truthyStatementOne);
const truthyStatementTwo = [1, -1, 100, -88];
console.log(truthyStatementTwo);
const truthyStatementThree = 10 > 5;
console.log(truthyStatementThree);
// statements that provide falsy value
const falsyStatementOne = undefined;
console.log(falsyStatementOne);
const falsyStatementTwo = null;
console.log(falsyStatementTwo);
const falsyStatementThree = 0;
console.log(falsyStatementThree);

// ?QUESTION 3. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3   true
// 4 >= 3 true
// 4 < 3  false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' false

// ?QUESTION 4. Find the length of python and jargon and make a falsy comparison statement.
const wordOne = "python";
const wordTwo = "jargon";
const wordOneLength = wordOne.length;
const wordTwoLength = wordTwo.length;
const comparison = wordOneLength > wordTwoLength;
console.log("length of python", wordOneLength);
console.log("length of jargon", wordTwoLength);
console.log("the comparison is :", comparison);

// ?QUESTION 5. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 true
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12) false
// !(4 > 3 && 10 > 12) true
// !(4 === '4') true

// ?QUESTION 6. Use the Date object to do the following activities
// What is the year today?
const now = new Date();
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());

// ?QUESTION 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const timestamp = now.getTime();
const secondsElapsed = Math.floor(timestamp / 1000);
console.log("Seconds elapsed since january 1st 1970 :", secondsElapsed);

// Exercises: Level 2

// ?QUESTION 8. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).Enter base: 20. Enter height: 10. The area of the triangle is 100.
let base = parseFloat(prompt("Enter base :"));
let height = parseFloat(prompt("Enter height :"));
let area = 0.5 * base * height;
console.log("The area of the triangle is", area);

// ?QUESTION 9. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).Enter side a: 5,Enter side b: 4,Enter side c: 3,The perimeter of the triangle is 12.
let sideA = parseFloat(prompt("Enter side A :"));
let sideB = parseFloat(prompt("Enter side B :"));
let sideC = parseFloat(prompt("Enter side C :"));
let perimeterOfTriangle = sideA + sideB + sideC;
console.log("The perimeter is ", perimeterOfTriangle);

// ?QUESTION 10. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let rectangleLength = parseFloat(prompt("Enter rectangle length :"));
let rectangleWidth = parseFloat(prompt("Enter rectangle width :"));
let areaOfRectangle = rectangleLength * rectangleWidth;
let perimeterOfRectangle = 2 * (rectangleLength + rectangleWidth);
console.log("The perimeter of the rectangle is ", perimeterOfRectangle);
console.log("The area of the rectangle is ", areaOfRectangle);
// ?QUESTION 11. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14;
let radius = parseFloat(prompt(" Enter the radius :"));
let areaOfCircle = pi * radius * radius;
let circumferenceofCircle = 2 * pi * radius;
console.log("The area of circle is ", areaOfCircle);
console.log("The circumference of circle is ", circumferenceofCircle);

// ?QUESTION 12. Calculate the slope, x-intercept and y-intercept of y = 2x -2.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10/Compare the slope of above two questions.

// ?QUESTION 13. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// ?QUESTION 14. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?.Enter hours: 40.Enter rate per hour: 28. Your weekly earning is 1120
let hours = parseFloat(prompt("Enter hours :"));
let ratePerhour = parseFloat(prompt("Enter rate per hour :"));
let weeklyEarning = hours * ratePerhour;
console.log("Your weekly earning is", weeklyEarning);

// ?QUESTION 15. If the length of your name is greater than 7 say, your name is long else say your name is short.Compare your first name length and your family name length and you should get this output. let firstName = 'Asabeneh'.let lastName = 'Yetayeh'.Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = "Asabeneh";
let lastName = "Yetayeh";
if (firstName.length > 7) {
  console.log("your name is long");
} else {
  console.log("your name is short");
}
if (firstName.length > lastName.length) {
  console.log(
    `your first name ${firstName} is longer than your family name, ${lastName}`
  );
} else {
  console.log(
    `your family name ${lastName} is longer than your first name, ${firstName}`
  );
}
// ?QUESTION 16. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.let myAge = 250.let yourAge = 25.I am 225 years older than you.
let myAge = 250;
let yourAge = 25;
const ageDifference = Math.abs(myAge - yourAge);
console.log(`i am ${ageDifference} years older than you`);

// ?QUESTION 17. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.Enter birth year: 1995.You are 25. You are old enough to drive.Enter birth year: 2005.You are 15. You will be allowed to drive after 3 years.
const applicantBirthYear = parseInt(prompt("Enter birth year : "));
const currentTime = new Date();
const currentYearr = currentTime.getFullYear();
const currentApplicantAge = currentYearr - applicantBirthYear;
if (currentApplicantAge >= 18) {
  console.log(`You are ${currentApplicantAge}`);
  console.log(`You are old enough to drive`);
} else {
  const yearsRemainingToDrive = 18 - currentApplicantAge;
  console.log(`You are ${currentApplicantAge}`);
  console.log(`You will be allowed to drive after ${yearsRemainingToDrive}`);
}
// ?QUESTION 18. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.Enter number of years you live: 100.You lived 3153600000 seconds.
const yearsLived = parseInt(prompt("Enter number of years you live :  "));
const secondsInOneYear = 365 * 24 * 60 * 60;
const totalSecondsLived = secondsInOneYear * yearsLived;
console.log(`you lived ${totalSecondsLived} seconds`);

// Exercises: Level 3
// ?QUESTION 19. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ).YYY-MM-DD HH:mm eg. 2012-01-02 07:05
const currentYear = now.getFullYear();
const currentMonth = (now.getMonth() + 1).toString().padStart(2, "0");
const currentDate = now.getDate().toString().padStart(2, "0");
const currentHour = now.getHours().toString().padStart(2, "0");
const currentMinute = now.getMinutes().toString().padStart(2, "0");
const humanReadableForm = `${currentYear}-${currentMonth}-${currentDate}  ${currentHour}:${currentMinute}`;
console.log(humanReadableForm);
