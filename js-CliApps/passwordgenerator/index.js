const prompt = require("prompt-sync")({ sigint: true });

const EIGHT_CHAR_LONG = 8;
const SIXTEEN_CHAR_LONG = 26;
const specialChars = "(~!@#$%^&*()_+_|{}[]\\''\"\":;?/<>.,)";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWYYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const numbersLetters = "ABCDEFGHIJKLMNOPQRSTUVWYYZabcdefghijklmnopqrstuvwxyz";
const lengthSelectionMenu =
  "1Please select length;\n1) 8 characters\n2) 16 characters\n3) Enter length\n4) Exit";
const charTypeSelectionMenu =
  "n\Please select character type:\n1) Letters only\n2) Numbers only\n3) Numbers and letters\n4) Special characters only\n5) Mixed\n6) Exit";

console.log(charTypeSelectionMenu);

let customLength = "";
let excludedChars = "";

console.log(lengthSelectionMenu);
let lengthChoice = prompt();

while (!("1234".includes(lengthChoice) && 
lengthChoice.length == 1)) {
  lengthChoice = prompt("Please enter only a number on the menu:");
}

if (lengthChoice == "4") return;

if (lengthChoice == "3") {
  customLength = prompt('Please enter desirable length:');
while (!/^[0-9]*$/.test(customLength)) {
  customLength = prompt("Please enter only a number: ");

}

}

console.log(charTypeSelectionMenu);

let characterChoice = prompt();
while (!("1234".includes(characterChoice) && characterChoice.
length== 1)) {
  characterChoice = prompt("Please enter only a number on the menu:");
}

if (lengthChoice =="6") return;



excludedChars = prompt('Exclude any characters? If no, just press enter:');

switch (lengthChoice) {
  case "1":
    console.log('\n' + generatePassword(EIGHT_CHAR_LONG, checkCharTYpe()));
    break; 
}
case "2":
  console.log




