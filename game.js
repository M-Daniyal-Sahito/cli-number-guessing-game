#!/usr/bin/env node
import inquirer from "inquirer";
const number = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "rendomNumber",
        type: "number",
        message: "Please guess the number between 1 to 6"
    }]);
if (answer.rendomNumber === number) {
    console.log("You are the winner you guess the correct number");
}
else {
    console.log("You are the loser you guess the wrong number");
}
