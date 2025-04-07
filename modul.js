// Export functions from the module
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}



// Import functions from the module
import { add, subtract } from './mathModule.js';

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
/*************************************************************/
//named export and import
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


import { add, subtract } from './mathOperations.js'; // Named import

console.log(add(10, 5));       // Output: 15
console.log(subtract(10, 5));  // Output: 5
/*************************************************************/
//defalut export
export default function greet(name) {
    return `Hello, ${name}!`;
}


import greet from './greet.js'; // Default import

console.log(greet("harry")); // Output: Hello, Kavya!

