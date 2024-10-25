//!💻 Exercises
//!Exercises: Level 1
//?QUESTION 1.Declare a function fullName and it print out your full name.
function fullName(){
  const myName="caleb kimutai koech"
  console.log(myName)
}
fullName()
//?QUESTION 2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  let nameFull = firstName + " " + lastName;
  console.log(nameFull);
}
fullName("caleb", "koech");

//?QUESTION 3.Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b){
  return a + b
}
console.log(addNumbers(3,4))
//?QUESTION 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function  areaOfRectangle(length, width) {
  if(length<=0 || width<=0){
      return 'length and width must be positive numbers'
  }
  return length * width;
}
console.log(areaOfRectangle(4,5))
//?QUESTION 5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length,width){
  if(length<=0 || width<=0){
      return 'length and width must be positive numbers'
  }
  return 2*(length+width);

}
console.log(perimeterOfRectangle(4,5))
//?QUESTION 6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height){
  if(length<=0 || width<=0 || height<=0
  ){
      return 'height, length and width must be positive numbers'
  }
  return length * width * height
}
console.log(volumeOfRectPrism(3,4,3))

//?QUESTION 7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
  if(radius<=0){
      return 'radius must be a positive number'
  }
  return 3.14*radius*radius
}
console.log(areaOfCircle(4))

//?QUESTION 8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius){
  if(radius<=0){
      return 'radius must be a positive number'}
      return 2*Math.PI*radius
}
console.log(circumOfCircle(7))

//?QUESTION 9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubstance(mass, volume){
  if(mass<=0|| volume<=0){
      return 'both mass and volume must be positive numbers'
  }
  return mass/volume;
}
console.log(densityOfSubstance(250, 50))
//?QUESTION 10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedOfObject(distance, time){
  if(time<=0||distance<=0){
      return 'both time and distance must be positive numbers'
  }
  return distance/time;
}
console.log(speedOfObject(50, 2))


//?QUESTION 11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfSubstance(mass, gravity){
  if(mass<=0||gravity<=0){
      return 'both mass and gravity must be positive numbers'
  }
  return mass * gravity
}
console.log(weightOfSubstance(30, 23))
//?QUESTION 12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius){
  return (celsius * 9/5) + 32
}
console.log(convertCelsiusToFahrenheit(45))

//?QUESTION 13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
function convertToBmi(weight,height){
  if(weight<=0||height<=0){
      return 'both weight and height must be positive numbers'
  }
  return (weight/(height*height)).toFixed(2)
}
console.log(convertToBmi(85, 1.5))
//?QUESTION 14.BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function bmiChecker (bmi){
  if (bmi < 18.5) {
      return "Underweight: BMI is less than 18.5";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight: BMI is 18.5 to 24.9";
  }
  else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight: BMI is 25 to 29.9";
  }
  else {
      return "Obese: BMI is 30 or more";
  }

}
console.log(bmiChecker(26))
//?//?QUESTION 15. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month <1 || month > 12) {
      return "Invalid month";
  }
  if (month >= 3 && month <= 5) {
      return 'Spring';
  }
  else if (month >= 6 && month <= 8) {
      return 'Summer';
  }
  else if (month >= 9 && month <= 11) {
      return 'Autumn';
  }
  else if (month == 12 || month == 1 || month == 2) {
      return 'Winter';
  }
}
console.log(checkSeason(22))

//?QUESTION 16.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMaximum(a, b,c){
  if(a>=b && a>=c){
      return a
  }
  else if(b>=a && b>=c){
      return b
  }
  else{
      return c
  }
}
console.log(findMaximum(10,4, 19))


//Exercises: Level 2
//?QUESTION 17.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof x !== 'number' || typeof y !== 'number') {
      return 'Please provide all five numeric values for a, b, c, x, and y';
  }
  return a * x + b * y + c === 0 
}
console.log(solveLinEquation(1,2,3,3,6))

//?QUESTION 18.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      return "Error: All inputs must be numbers.";
  }

  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `Two solutions: x1 = ${x1}, x2 = ${x2}`;
  } else if (discriminant === 0) {
      const x = -b / (2 * a);
      return `One solution: x = ${x}`;
  } else {
      return "No real solutions.";
  }
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//?QUESTION 19.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(numbers){
  for(let i=0;i<numbers.length;i++)
      {
      console.log(numbers[i]);
  }}
  const numbers=[1,2,3,4,5]
  console.log(printArray(numbers))

//?QUESTION 1.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
//?QUESTION 1.Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
//?QUESTION 1.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
//?QUESTION 1.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

//?QUESTION 1.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

//?QUESTION 1.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

//?QUESTION 1.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

//?QUESTION 1.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

//?QUESTION 1.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

//?QUESTION 1.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
//?QUESTION 1.Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
//?QUESTION 1.Writ a function which generates a randomUserIp.

//?QUESTION 1.Write a function which generates a randomMacAddress

//?QUESTION 1.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
//?QUESTION 1.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
Exercises: Level 3
//?QUESTION 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
//?QUESTION 1.Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
//?QUESTION 1.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

//?QUESTION 1.Write a function arrayOfRgbColors which return any number of RGB colors in an array.

//?QUESTION 1.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

//?QUESTION 1.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

//?QUESTION 1.Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
//?QUESTION 1.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

//?QUESTION 1.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

//?QUESTION 1.Call your function isEmpty, it takes a parameter and it checks if it is empty or not

//?QUESTION 1.Call your function sum, it takes any number of arguments and it returns the sum.

//?QUESTION 1.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

//?QUESTION 1.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

//?QUESTION 1.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
//?QUESTION 1.Write a function called isPrime, which checks if a number is prime number.

//?QUESTION 1.Write a functions which checks if all items are unique in the array.

//?QUESTION 1.Write a function which checks if all the items of the array are the same data type.

//?QUESTION 1.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

//?QUESTION 1.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
//?QUESTION 1.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

