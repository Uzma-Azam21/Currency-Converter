#! /usr/bib/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome! Convert currencies instantly and accurately\n"));
// Define the list of currencies and their exchange rates
const exchange_rates = {
    USD: 1,
    PKR: 278,
    CAD: 1.36,
    EURO: 0.92,
    NZD: 1.62,
    AUD: 1.5,
    AED: 3.67,
    CNY: 7.24,
    JPY: 156.91,
    TRY: 32.18, // Turkish Lira
};
// Prompt the user to select currencies to convert from and to:
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.cyan("Choose the currency to convert from:"),
        choices: [
            "USD",
            "PKR",
            "CAD",
            "EURO",
            "NZD",
            "AUD",
            "AED",
            "CNY",
            "JPY",
            "TRY",
        ]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.cyan("Choose the currency to convert into:"),
        choices: [
            "USD",
            "PKR",
            "CAD",
            "EURO",
            "NZD",
            "AUD",
            "AED",
            "CNY",
            "JPY",
            "TRY",
        ]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green("How much currency do you want to convert?"),
    },
]);
// First set up variables for performing currency conversion:
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;
// Use formula for currency conversion calculations:
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount:
console.log(chalk.bold(`Here's the converted amount: ${chalk.blue.bold(converted_amount.toFixed(2))}`));
