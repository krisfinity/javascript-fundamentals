//Task1 (DRY)

const name = "Kristen";
const location = "Kansas City";

console.log(`Hello I am ${name} and I am from ${location}`);

function addNumbers(num1, num2 = 15) {
    return num1 + num2;
}
console.log(addNumbers(5, 10)); 
console.log(addNumbers(5));

const printMessage = (name, location) => {
    console.log(`Hello I am ${name} and I am from ${location}`);
};
printMessage("Kristen", "Kansas City");







  

   

