#!/usr/bin/env node
import inquirer from "inquirer";
let randomnumber = Math.floor(100 + Math.random() * 9000);
console.log(randomnumber);
let my_balance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter your name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please select a non empty value";
        }
    },
    {
        name: "courses",
        type: "list",
        messages: "Select the courses",
        choices: ["MSoffice", "HTML", "Typescript", "pyton"]
    },
]);
const tuitionFees = {
    "MSoffice": 2000,
    "HTML": 5000,
    "Typescript": 9000,
    "pyton": 10000,
};
console.log(`\nTuition Fees: ${tuitionFees[answer.courses]}\n`);
console.log(`\nBalance : ${my_balance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        choices: ["Jazzcash", "Easypaisa", "Bank Transfer"],
        message: "select the payment method:"
    },
    {
        name: "amount",
        type: "input",
        message: "Enter your amount",
        validate: function (value) {
            if (value !== "") {
                return true;
            }
            return "\nPlease  select a non empty value\n";
        }
    },
]);
console.log(`\n your payment method ${paymentType.payment}\n`);
const TuitionFees = tuitionFees[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (TuitionFees === paymentAmount) {
    console.log(`\nCongratulation!,you are successful enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would to do in your next:",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log(`\n*********STATUS**********`);
        console.log(`Student name : ${answer.student}`);
        console.log(`Student ID : ${randomnumber}`);
        console.log(`Course : ${answer.courses}`);
        console.log(`Tuition Fees : ${paymentAmount}`);
        console.log(`Balance :${my_balance += paymentAmount}`);
    }
    else {
        console.log(`\nExisting Management System\n`);
    }
}
else {
    console.log(`Invalid amount due to courses.\n`);
}
