// Function sample with rest parameter and spread operator
function sample(...food) { // Rest parameter
    console.log(...food); // Spread operation
}
const food1 = "dosa";
const food2 = "vada";
const food3 = "pongal";
const food4 = "chapathi";
sample(food1, food2, food3, food4);
// Output: dosa vada pongal chapathi

// Function to calculate average
function calculateAverage(...numbers) { // Rest parameter
    console.log(...numbers); // Spread operator
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Sum all numbers
    const average = sum / numbers.length; // Calculate average
    console.log(`Average: ${average}`);
}
const num1 = 10;
const num2 = 20;
const num3 = 30;
calculateAverage(num1, num2, num3);
// Output: Average: 20

// Class Product
class Product {
    constructor(name, price) {
        this.name = name; // Assign the name property
        this.price = price; // Assign the price property
    }
    displayProduct() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
    }
}

const product1 = new Product("shirt", "120.00");
const product2 = new Product("Guitar", "12000");
product1.displayProduct();
// Output:
// Product Name: shirt
// Product Price: 120.00
product2.displayProduct();
// Output:
// Product Name: Guitar
// Product Price: 12000

// Class Person
class Person {
    constructor(name) {
        this.name = name; // Assign the name property
    }

    greet() {
        console.log(`Hello, ${this.name}! Welcome to our platform.`);
    }
}

const person1 = new Person("Jora");
person1.greet();
// Output:
// Hello, Jora! Welcome to our platform.


