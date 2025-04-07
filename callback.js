function greet(name, callback) { // Callback function
    console.log(`Hello, ${name}`);
    callback(); // Call the callback function
}

function sayGoodbye() {
    console.log("Goodbye"); // Fixed to use console.log
}

// Call the greet function with the sayGoodbye callback
greet("Alice", sayGoodbye);
