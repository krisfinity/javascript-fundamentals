//Task1

function solveThis() {
  let var1 = 10 + 32;
  let var2 = 12 / 3;

  console.log(42 * 4);
}
solveThis();

//Task2

function studentLog() {
  let name = 5;
  let age = (name *= 10);
  let num = (age %= 20);
  let address = (num += 5);

  console.log(name, age, num, address);
}
studentLog();

//Task3

function comparisonOpp() {
  const x = 21;
  const y = 80;

  console.log(` ${x === y} " Is the output of strict equality"`);
  console.log(` ${y !== x}  " Is the output of strict inequality" `);
  console.log(` ${x == y} "  Is the output of loose equality" `);
}
comparisonOpp();
