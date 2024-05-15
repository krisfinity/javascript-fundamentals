function ifExample(value1) {
    console.log( 'Before if statement');
    if ( value1 > 10 ) {
        console.log(`Value of ${value1} is larger than 10
        `);

    }
    //ifExample(2)
   
    console.log("After if statement")
}
ifExample(2);

const elseExample =( value2) => {
    if (value2 =='JavaScript') {
        console.log( 'The value was true.');
  } else {
    console.log('The value was false.');
}
};
elseExample("value2"); 

function elseIfExample(num1) {
    if (num1 <= 5) {
        console.log(`${num1} is less than or = 5`
)    } else if (num1 <= 10) {
      console.log(`${num1} is less than 10}
      `);
    } else if(num1 <= 15) {
        console.log(`{$num1} is less than or equal to 15
    `);
  } else {
        console.log(`${num1} is greater than 15`);
    }
}


 //elseIfExample(8);
 //elseIfExample(20);

 const logicalIfExample=(num3, num4) => {
    if(num3==10 && num4>10) {
        console.log('Both conditions are true');
    } else {
        console.log('One or both of the conditions are not true');

    }

    if(num3 <=9 || num4 > 20){
        console.log('One of the conditions was true');
    } else {
        console.log('Both conditions were false');   
    }
 };
//logicalIfExample(10,5);

 //This if Ternary expression
 const ternaryExample=(param) => {
    const example=param >10?`${param} is greater` : `${param} is less`;
    console.log(example);

 };
 //ternaryExample(5);
 //ternaryExample(19);

 //This is for Swith statement
 function favoriteIcecream(flavor) {
    switch (flavor) {
        case  'vanilla':
            console.log('Your favorite icecream is Vanilla ');
            break;
        case  'chocolate':
            console.log('Your favorite icecream is Chocolate');
            break;
            default: 
            console.log('We do not have favorite flavor');
            break;
    }
 }
 favoriteIcecream('vanilla');

 
 
 const gradeEvaluater=(grade) => {
    switch (grade) {
    case 'A':
    case 'u':
    case 'U':
    case 'a':
    case 'a':
         console.log('You got an A!');
            break;
        case 'b':
        case 'B':
            console.log('You got a B!');
            break;
        case 'c':
        case 'C':
            console.log('You got a C');
            break;
        case 'd':
        case 'D':
        console.log('You got a D');
            break;
            default:
        console.log('You got an F');
            break;
    }
 }

 gradeEvaluator();



// Addition and subtraction
function exampleAddSubtract(num1, num2) {
    const add = num1 + num2;
    const sub = num2 - num1;
    console.log(`Addition ${add}, Subtraction ${sub}`);
  }
  
  // Multiply and divide
  function exampleMultiplyDivide(num3, num4) {
    const mul = num3 * num4;
    const div = num4 / num3;
    console.log(`Multiplying ${mul}, Divide ${div}`);
  }
  
  exampleAddSubtract(7, 12);
  exampleMultiplyDivide(4, 14);
  
  // Modulus - gives you the division remainder.
  const exampleModulus = () => {
    const answer1 = 10 % 4;
    const answer2 = 12 % 3;
    console.log(`1st is ${answer1} 2nd is ${answer2}`);
  };
  exampleModulus();
  
  // Exponentiation
  const exampleExponent = (value) => {
    const answer3 = 2 ** value;
    console.log(answer3);
  };
  exampleExponent(5);
  
  // PEMDAS
  const mathOrder = () => {
    const total = (10 / (3 + 2)) * 4 + 5 ** 2 + 7 - 10;
    console.log(`Math order ${total}`);
  };
  mathOrder();
  
  // Assignment operators
  const additionAssign = () => {
    let numAdd1 = 5;
    let numAdd2 = 10;
    numAdd1 += numAdd2;
    // numAdd1 = numAdd1 + numAdd2;
    console.log(`Addition Assignment Operator ${numAdd1}`);
  };
  additionAssign();
  
  const subtractAssign = () => {
    let numSub1 = 20;
    let numSub2 = 8;
    numSub1 -= numSub2;
    // numSub1 = numSub1 - numSub2;
    console.log(`Subtraction Assignment Operator ${numSub1}`);
  };
  subtractAssign();
  
  const multiplyAssign = (num5, num6) => {
    num5 *= num6;
    // num5 = num5 * num6;
    console.log(`Multiply Assignment Operator ${num5}`);
  };
  multiplyAssign(4, 7);
  
  const divideAssign = (num7, num8) => {
    num7 /= num8;
    // num7 = num7 / num8;
    console.log(`Divide Assignment Operator ${num7}`);
  };
  divideAssign(12, 4);
  
  const modulusAssign = (num9) => {
    num9 %= 34;
    // num9 = num9 % 34;
    console.log(`Modulus Assignment Operator ${num9}`);
  };
  modulusAssign(16);
  
  const exponentAssign = (value6, powerOf) => {
    return (value6 **= powerOf);
  };
  console.log(exponentAssign(12, 3));
  
  // Comparison operators
  const compareExample = (value1, value2) => {
    const twoEqualSigns = value1 == value2;
    const ThreeEqualSigns = value1 === value2;
    const exclamationEqual = value1 != value2;
    console.log(
      `Is twoEqualSigns same: ${twoEqualSigns}\nIs threeEqualSigns same: ${ThreeEqualSigns}\nIs exclamationEqual same: ${exclamationEqual}`
    );
  };
  // compareExample("5", 5);
  // compareExample("4", 5);
  compareExample("You", "you");
  
  const greater = (value3, value4) => value3 > value4;
  console.log(greater(15, 9));
  
  // Logical operators
  const logicalExample = (num10, num11) => {
    const doubleAmpersand = num10 < 20 && num11 > 10;
    const doublePipe = num10 === 5 || num11 == "5";
    const reverse = !(num10 == num11);
    console.log(
      `Is doubleAmpersand same: ${doubleAmpersand}\nIs doublePipe same: ${doublePipe}\nIs reverse true: ${reverse}`
    );
  };
  logicalExample(10, 10);
  
  // Increment operators
  const incrementExample = () => {
    let num = 20;
    const sum = num++;
    // const sum = num + 1;
    console.log(`Increment Post - num: ${num}, sum: ${sum}`);
  
    let num1 = 10;
    const sum1 = ++num1;
    console.log(`Increment Pre - num1: ${num1}, sum1: ${sum1}`);
  };
  incrementExample();
  
  // Decrement operators
  function decrementExample() {
    let foxtrot = 10;
    const sum3 = foxtrot--;
    console.log(`Decrement Post - foxtrot: ${foxtrot}, sum3: ${sum3}`);
  
    let hotel = 50;
    const sum4 = --hotel;
    console.log(`Decrement Pre - hotel: ${hotel}, sum4: ${sum4}`);
  }
  decrementExample();