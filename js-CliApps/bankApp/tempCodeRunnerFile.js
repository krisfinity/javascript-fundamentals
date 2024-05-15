const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
const fs = require("fs");
const {
  checkYorN,
  acctNumExists,
  validateNewAcctinputs,
} = require("./helpers");

const title =
  "================================================\n" +
  "=\t\t\t\t\t       =\n" +
  "=\t\t" +
  "  " +
  "ABC BANK" +
  "\t\t       =" +
  "\n=\t\t\t\t\t       =" +
  "\n================================================";
const menuOptions = `What would you like to do?\n1) Show balance\n2) Withdraw\n3) Deposit\n4) Show account details\n5) Delete account\n6) Exit`;
const byeMessage = "\nThank you for visiting us. Have a nice day!";
let allAccounts = [];
let originalAccountAmount = 0;

if (fs.existsSync("accountDatabase.txt")) {
  allAccounts = JSON.parse(fs.readFileSync("accountDatabase.txt", "utf8"));
  originalAccountAmount = allAccounts.length;
}

console.log(title + "\n");
console.log(chalk.bold("Welcome to ABC BANK!"));

const handleMenu = (acct) => {
  console.log("\n" + menuOptions);

  let input = prompt();
  while (!("123456".includes(input) && input.length == 1)) {
    input = prompt("Please enter only a number on the menu: ");
  }

  if (input == "1") {
    console.log(chalk.green("\nYou current balance is $" + acct.balance + "."));
    input = "";
    handleMenu(acct);
  } else if (input == "2") {
    const currentBalance = parseInt(acct.balance);
    console.log(typeof currentBalance);
    let withdrawAmount = prompt("How much would you like to withdraw?: ");

    while (
      !(
        withdrawAmount.at(-3) == "." &&
        /^[0-9]*$/.test(withdrawAmount.slice(-2)) &&
        withdrawAmount.slice(-2).length == 2 &&
        /^[0-9]*$/.test(withdrawAmount.slice(0, -3))
      )
    ) {
      withdrawAmount = prompt(
        "Please enter amount in the format of dollars and cents: "
      );
    }

    if (withdrawAmount > currentBalance) {
      console.log(
        chalk.red(
          `\nYou do not have enough in your account to withdraw $${withdrawAmount}.`
        )
      );
    } else {
      console.log(chalk.green("\nWithdraw: $" + withdrawAmount));
      console.log(
        chalk.green(
          "Your current balance is $" + (currentBalance - withdrawAmount + ".")
        )
      );
      acct.balance = currentBalance - withdrawAmount;
    }

    input = "";
    handleMenu(acct);
  } else if (input =="3") {
    let depositAmount = prompt('How much would you like to Deposit?')
  
    while (
      !(
        depositAmount.at(-3) == "." &&
        /^[0-9]*$/.test(depositAmount.slice(-2)) &&
        withdrawAmount.slice(-2).length == 2 &&
        /^[0-9]*$/.test(depositAmount.slice(0, -3))
      )
    ) {
      depositamount = prompt(
        "Please enter Amount in the format of dollars and cents:"
      )
  }

  console.log(chalk.green("\nDeposit"))
};console.log(chalk.green("Your current balance is $")) + parsefloat(acct.balance) + parseFloat

let userInput = prompt(
  "Do you have an account with us? Enter Y for Yes or N for No: "
);
while (!checkYorN(userInput.trim())) {
  userInput = prompt("Please enter only either Y or N: ");
}

if (userInput.trim().toLowerCase() == "n") {
  userInput = prompt("Would you like to have an account, Y or N?: ");

  while (!checkYorN(userInput.trim())) {
    userInput = prompt("Please enter only either Y or N: ");
  }

  if (userInput.trim().toLowerCase() == "n") console.log(byeMessage);

  if (userInput.trim().toLowerCase() == "y") {
    const firstName = prompt("Please enter your first name: ");
    const lastName = prompt("Please enter your last name: ");
    let accountNumber = prompt("Please create your account number: ");
    const balance = prompt("Please enter a balance amount: ");

    while (acctNumExists(allAccounts, accountNumber)) {
      accountNumber = prompt(
        `The account number ${accountNumber} is already taken. Please pick another one: `
      );
    }

    if (validateNewAcctinputs(firstName, lastName, balance)) {
      const newAccount = {
        name: firstName + lastName,
        accountNumber: accountNumber,
        balance: balance,
        createdAt: new Date().toLocaleDateString(),
      };

      allAccounts.push(newAccount);
      console.log(chalk.green("\nYour account has been created successfully!"));
      handleMenu({ ...newAccount });
    }
}
}
}
  
