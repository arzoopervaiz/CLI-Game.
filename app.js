#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Math.floor use to convert decimal value into an integer.
let randomNumber = Math.floor(Math.random() * 6 + 1); // Math.random used to generate a random number.
console.log(chalk.bgBlackBright.bold("\n\t Random Number Guessing Game \n"));
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
        transformer: (input) => {
            // Use for changing the color of the user input.
            return chalk.bgBlackBright.bold(input);
        }
    },
]);
// Test condition.
if (answer.userGuessNumber === randomNumber) {
    console.log(chalk.yellow("Congtratulation! you guess right number."));
}
else {
    console.log(chalk.yellow("Sorry, you guessed the wrong number. The correct number was " + (randomNumber) + "."));
}
;
