let dynamicNumber = 7; 
let userNumber = parseInt(prompt("Enter a number:"));
let resultMessage;
if (userNumber > dynamicNumber) {
    resultMessage = `${userNumber} is greater than ${dynamicNumber}.`;
} else if (userNumber === dynamicNumber) {
    resultMessage = `${userNumber} is equal to ${dynamicNumber}.`;
} else {
    resultMessage = `${userNumber} is less than ${dynamicNumber}.`;
}

// Step 4: Output the result to the user
console.log(resultMessage);


let userName = prompt("Enter a name:");
let confirmationMessage;
switch (userName) {
    case "umaima":
        confirmationMessage = "You are a friend, umaima!";
        break;
    case "aahan":
        confirmationMessage = "You are a friend, aahan!";
        break;
    case "ali":
        confirmationMessage = "You are a friend, ali!";
        break;
    default:
        confirmationMessage = "I don't know you.";
}

// Step 3: Output the result to the console
console.log(confirmationMessage);


let choices = ["Rock", "Paper", "Scissors"];
let playerSelectionIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
let computerSelectionIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
let responseMessage = `Player chose ${choices[playerSelectionIndex]}, Computer chose ${choices[computerSelectionIndex]}\n`;

if (playerSelectionIndex === computerSelectionIndex) {
responseMessage += "It's a tie!";
}
else {
if (
    (playerSelectionIndex === 0 && computerSelectionIndex === 2) ||
    (playerSelectionIndex === 1 && computerSelectionIndex === 0) ||
    (playerSelectionIndex === 2 && computerSelectionIndex === 1)
) {
    responseMessage += "Player wins!";
}
else {
    responseMessage += "Computer wins!";
}
}

// Step 6: Output the response message
console.log(responseMessage);

// Step 1: Create a variable with a Boolean value
let myVariable = true;

// Step 2: Output the value of the variable to the console
console.log("Value of myVariable:", myVariable);

// Step 3: Check if the variable is true and output a message
if (myVariable) {
    console.log("myVariable is true");
}

// Step 4: Add another if statement with a ! to check if the condition is not true
if (!myVariable) {
    console.log("myVariable is not true");
} else {
    console.log("myVariable is false");
}




// EX4.2
let userInput = prompt("Please enter your age:");

// Step 2: Convert the response from the prompt to a number
let userAge = parseInt(userInput);

// Step 3: Declare a message variable to hold the console message for the user
let message;

// Step 4: Check if age is equal to or greater than 21
if (userAge >= 21) {
    message = "You are confirmed entry to the venue and can purchase alcohol.";
}

// Step 5: Check if age is equal to or greater than 19 (since the previous condition failed)
else if (userAge >= 19) {
    message = "You are confirmed entry to the venue, but cannot purchase alcohol.";
}

// Step 6: Default else statement for cases where both conditions fail
else {
    message = "You are denied entry to the venue.";
}

// Step 7: Output the response message variable to the console
console.log(message);



// Step 1: Get a random value (0-5)
let randomValue = Math.floor(Math.random() * 6);

// Step 2: Prompt user for a question
let userQuestion = prompt("Ask the Magic 8-Ball a question:");

// Step 3: Create responses using a switch statement
let response;
switch (randomValue) {
    case 0:
        response = "Yes, definitely.";
        break;
    case 1:
        response = "I'm not sure, ask again later.";
        break;
    case 2:
        response = "No, it's not likely.";
        break;
    case 3:
        response = "Absolutely not.";
        break;
    case 4:
        response = "Most likely.";
        break;
    case 5:
        response = "Ask me again after lunch.";
        break;
    default:
        response = "I cannot answer that right now.";
}

// Step 4: Create the final sentence
let finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: "${response}"`;

// Step 5: Output the final response to the console
console.log(finalResponse);




// Step 1: Prompt user to set the prize value
let prize = prompt("Set the value of your prize (between 0 and 10):");

// Step 2: Convert prompt response to a number
prize = Number(prize);

// Step 3: Create a variable for the output message
let outputMessage = "My Selection: ";

// Step 4: Use a switch statement to provide a response based on the prize value
let prizeMessage;
switch (prize) {
    case 0:
        prizeMessage = "You won a small plush toy!";
        break;
    case 1:
        prizeMessage = "Congratulations! You've won a $10 gift card!";
        break;
    case 2:
    case 3:
        prizeMessage = "You've won a free movie ticket!";
        break;
    case 4:
    case 5:
        prizeMessage = "You've won a discount coupon for your next purchase!";
        break;
    case 6:
    case 7:
        prizeMessage = "You've won a delicious chocolate bar!";
        break;
    case 8:
    case 9:
        prizeMessage = "You've won a cool keychain!";
        break;
    case 10:
        prizeMessage = "Congratulations! You're the grand prize winner of a brand new car!";
        break;
    default:
        prizeMessage = "Sorry, the value you entered is not valid for this game.";
}

// Step 6: Output the message to the user
console.log(outputMessage + prizeMessage);