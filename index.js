//Defined all of my variables
let name1;
let myName;
let first_balance;
let second_balance;
let grade;
let extraCredit;
let newGrade;
let newBalance;
let balance;
let deduction;

//Question 1

// Created first variable with the phrase "My name is "
name1 = "My name is: ";

// Assigned myName to my name
myName = "Andrew";

// Print to the console 
console.log (name1 + myName+"." );


// Question 2

//Ask the user 'What is their balance?' and storing it
first_balance = prompt("What is your balnace?");

// !! You shouldn't have a space between the word parseInt and the parens. It's a function just like console.log()
// Subtracting $10 from the balance
second_balance = parseInt (first_balance) - 10;

//Alerting the user they've lost $10 from their balance
alert("You lost $10. Your new balance is: $"+ second_balance + ".");

//Quesiton 3 

//Asking the user to enter their number grade
grade = prompt("Enter your number grade");

//Asking user the amount of extra credit
extraCredit = prompt("Enter your extra credit");

//Converting grade and extra credit from strings to integers 
newGrade = parseInt(grade) + parseInt(extraCredit);

//Alerting the user their new grade with extra credit included
alert("Your new grade is: "+ newGrade);


//Question 4

//Prompting user for their balance
balance = prompt("What is your balance?");

//Asking the user how much they would like to withdraw
deduction = prompt("How much do you want to deduct?");

//Subtracting the deduction from the balance
newBalance = balance - deduction;

//Printing the remaining balance
console.log("Your new balance is: $" + newBalance+".");








