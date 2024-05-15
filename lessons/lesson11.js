const myHouse = new Object();
//console.log (myHouse);
myHouse.foundation = "Concrete";
myHouse.windowSize = "20";
myHouse.doorColor = "Tan";
myHouse.roofType = "Composite";
//console.log(myHouse);
//console.log(roofType);

const house = {
  foundationStyle: "Dirt",
  windowInchSize: 30,
  houseColor: "Tan",
  roofTileType: "Shingle",
};
//console.log(house);

house.foundationStyle = "Concrete";
house["houseColor"] = "White";
//console.log(house['houseColor']);
//console.log(house);

const somethingObj = {};
const str = "someString";
const rand = Math.random();
const MyObj = {};

somethingObj.type = "Lorem ipsum dolor sit amet";
somethingObj["date issued"] = "key has a space";
somethingObj[str] = "Key is a variable.";
somethingObj[rand] = "Key is another variable";
somethingObj[MyObj] = "Key is myObj variable";
somethingObj[""] = "Key is an empty string";
//console.log(somethingObj);
//console.log(somethingObj.someString);
//console.log(somethingObj[{""}]);
// if key is {} (empty), access with square brackets
//console.log(somethingObj['']);

const alpha = Math.random();
const beta = "My beta";
const cat = "My cat";

const happy = {
  [cat]: "Some Number",
  [beta]: "Just another string",
};
//console.log(happy);
//console.log(happy['My cat']);
//console.log(happy[cat]);

const showSomething = (obj, objName) => {
  let result = "";
  for (const i in obj) {
    if (Object.hasOwn(obj, i)) {
      result += `${objName}, ${i} , = ${obj[i]}\n`;
    }
  }
  console.log(result);
};
showSomething(somethingObj, "something");

//showSomethin(somethingObj,"somethingObj")

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const peter = new Person('Peter', 'Parker');
const hal = new Person ('Hal, Jordan');

console.log(peter);
console.log(hal);



hal.lastName = "Smith";

//console.log(hal);

function Truck(make,model,year,color, owner ){
    this.model =model;
    this.truck = year;
    this.color= color
    this.owner = owner;
    this.make = make
}

const peterTruck = new Truck "Chevy" , "Silverado", 2016,