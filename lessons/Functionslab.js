//Task1 (DRY)

const name = "Kristen";
const location = "Kansas City";

console.log(`Hello I am ${name} and I am from ${location}`);

//Task2

function addNumbers(num1, num2 = 15) {
    return num1 + num2;
}
console.log(addNumbers(5, 10)); 
console.log(addNumbers(5));

//Task3

const printMessage = (name, location) => {
    console.log(`Hello I am ${name} and I am from ${location}`);
};
printMessage("Kristen", "Kansas City");


//excercises

//Write a function called calculateRectangleArea that takes two parameters: length and width,
//and returns the area of a rectangle. The formula for calculating the area of a rectangle
//is area = length * width.

function calculateArea(length, width) {
    length = 30;
    width = 90;
    console.log(length * width);
  }
  calculateArea();
  
  //Write a function called celsiusToFahrenheit that takes one parameter: 
  //celsius, and returns the temperature converted from Celsius to Fahrenheit. 
  //The formula for converting Celsius to Fahrenheit is fahrenheit = (celsius * 9/5) + 32
  
  function celsiusToFarenheight(celsius=20) {
    let farenheight =(celsius * 9/5 +32);
    return (farenheight);
  }
  console.log(celsiusToFarenheight(20));
  
  //Calculate the perimeter of a triangle:
  //Write a function called calculateTrianglePerimeter that takes 
  //three parameters: side1, side2, and side3, 
  //representing the lengths of the three sides of a triangle, 
  //and returns the perimeter of the triangle. The formula for calculating 
  //the perimeter of a triangle is perimeter = side1 + side2 + side3.
  
  function calculateTrianglePerimeter(side1, side2, side3) {
    // Parameter definitions come first
    const perimeter = side1 + side2 + side3;
    console.log(perimeter);
  }
  
  // Function call with arguments
  const side1 = 4;
  const side2 = 12;
  const side3 = 4;
  calculateTrianglePerimeter(side1, side2, side3);
  
  calculateTrianglePerimeter();
  
  
  








  

   

