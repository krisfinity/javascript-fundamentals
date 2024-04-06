//Declare a string using single quote
let felineType = 'Cats'
let felineAction = "They meow quietly.";

//Declare a string using double quotes
let canineType = "Dogs";
let canineAction = "They bark loudly";

/*Using bracket notation on a variable of string
will output 1 characters, or undefined */
console.log(canineType[3])
console.log(felineAction[7])
console.log(canineAction[4]);
console.log(felineType[0]);

let longSentence = 
"Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,"+ 
"consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet," +
"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,";

let longSecond = "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet.  \
consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet. \
Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,"
const alpha = "Hello";
const beta = " World" ;

const combinedVariables = alpha + beta;
console.log(combinedVariables);

const combined2 = alpha + 40; /* some cases will not combine string and number internal*/
const VALUE1 = 10; 
const VALUE2 = 20;
console.log(
     "Thirty is " + (VALUE1 + VALUE2) + "and not " + (2 * VALUE1 + VALUE2)

)

console.log(`Thirty is ${VALUE1 + VALUE2} and not ${2 * VALUE1 + VALUE2}`);
console.log(`Here are more ${combinedVariables} , ${combined2}`);
console.log(`Canines are ${canineType}, ${canineAction}`);

//Single character form a UTF-8 character set
let letter = '\u00A9'
console.log(letter);

let phrase = 'My name is Roger O\'Dell. \tHow are \n you doing today?';
console.log(phrase);

let phrase2 = 'Lets\'s try  \something \0';
console.log(phrase2);

//Using the string length property
const example_length = "sit amet, consecteturLorem ipsum";
console.log(example_length.length);

const msg = ' Hello, world ';

console.log(msg.at(-2));
console.log (msg.at(4));

console.log(msg.charAt(2));

console.log(msg.includes('He'));
console.log(msg.indexOf('w'));
console.log(msg.toUpperCase());




















