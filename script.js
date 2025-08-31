// ----------------------
// Part 1: JavaScript Basics
// ----------------------

// Variables and conditionals
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Capture user input (we'll add DOM part later)
let price = 100;
let discount = 15;
if (discount > 10) {
    console.log("Discount applied!");
} else {
    console.log("No discount for you.");
}


// ----------------------
// Part 2: Functions
// ----------------------

// Function to calculate total price
function calculateTotal(price, discount) {
    return price - (price * discount / 100);
}
console.log("Total price after discount:", calculateTotal(100, 20));

// Function to format a string
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Alice"));


// ----------------------
// Part 3: Loops
// ----------------------

// For loop example
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop example (simple countdown)
let countdown = 5;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}


// ----------------------
// Part 4: DOM Manipulation
// ----------------------

// Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("welcome").textContent = "You clicked the button! 🎉";
});

// Toggle color of text
document.getElementById("toggleColorBtn").addEventListener("click", function() {
    document.getElementById("welcome").classList.toggle("highlight");
});

// Greet user when button is clicked
document.getElementById("greetBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    alert(greetUser(name));
});

// Create a simple countdown on the page
let display = document.getElementById("countdown");
for (let i = 5; i >= 0; i--) {
    setTimeout(() => {
        display.textContent = i > 0 ? i : "Time's up!";
    }, (5 - i) * 1000);
}
