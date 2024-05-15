//Task1

// Array of ice cream flavors
const best_Ice_Cream = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  " Mint Chocolate Chip",
  "Cookies and Cream",
  "Rocky Road",
  "Butter Pecan",
  "Coffee",
  "Pistachio",
  "Cookie Dough",
];

const flavorType = best_Ice_Cream[10];
console.log(flavorType);

// Function to loop through and print out the values
let flavors = 0;

function printIceCreamFlavors() {
  for (let i = 0; i < flavors.length; i++) {
    //???
    console.log(flavors[i]);
  }
}

// Call the function with the array of ice cream flavors
printIceCreamFlavors();



//a practice



let num = 0;
console.log(num);
num = 2;
console.log(num);

function shutUp() {
  console.log("If I want to I will");
}
shutUp();

const dontTellme = function () {
  console.log("If you dont i'll lose it!");
};
dontTellme();

console.log(shutUp);
console.log(dontTellme);
